export default function Chat() {
  return (
    <>
      <div className="px-[28px] py-5 rounded-[15px] bg-light-blue flex items-start gap-5">
        <div className="bg-slate-300 rounded-full w-[50px] h-[50px] overflow-hidden drop-shadow-4">
          <img
            className="rounded-full w-full h-full object-cover"
            src={"https://source.unsplash.com/500x500/?working-man"}
            alt="profile"
          />
        </div>
        <span className="text-navy-blue font-medium text-[18px] flex-1 place-self-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        </span>
      </div>
    </>
  );
}
