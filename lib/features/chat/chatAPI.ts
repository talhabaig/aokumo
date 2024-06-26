function request(url: string, payload: any) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer token`,
    },
  });
}

export async function sendMessageAndStream(
  url: string,
  payload: any,
  onMessage: (message: string, done: boolean) => Promise<void>
) {
  const response = await request(url, payload);

  const reader = response.body?.getReader();
  if (!reader) {
    throw new Error("Could not get reader from response body");
  }

  const decoder = new TextDecoder("utf-8");
  let out = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    const chunk = decoder.decode(value, { stream: true });
    out += chunk;

    let eventSeparatorIndex;
    while ((eventSeparatorIndex = out.indexOf("\n\n")) !== -1) {
      const data = out.slice(0, eventSeparatorIndex);

      if (data.match(/^data: \[DONE\]/)) {
        await onMessage("", true); // send end message.
        return;
      }

      const event = JSON.parse(data.replace(/^data: /, ""));

      out = out.slice(eventSeparatorIndex + 2);

      if (event.choices[0].finish_reason === "stop") {
        await onMessage("", true); // send end message.
      } else if (event.choices[0].role === "assistant") {
        await onMessage("", false); // send start message.
      } else {
        await onMessage(event.choices[0].delta.content, false);
      }
    }
  }
}
