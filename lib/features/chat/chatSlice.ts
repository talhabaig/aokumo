import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { sendMessageAndStream } from "./chatAPI";
import { AppThunk } from "@/lib/store";

const initialState: any = {
  chats: [],
  teamChats: [],
  favoriteChats: [],
  favChat: [],
  favTeamChat: [],
  profileUser: undefined,
  activeChat: {},
  chat: [],
  lastMessage: "",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatsAndContacts: (state, action) => {
      const { chats, teamChats } = action.payload;
      state.chats = chats;
      state.teamChats = teamChats;
      state.favoriteChats = [...state.favChat, ...state.favTeamChat];
    },
    addToFavorite: (state, action) => {
      const { id } = action.payload;
      state.teamChats = state.teamChats.map((chat: any) =>
        chat.id === id ? { ...chat, favorite: !chat.favorite } : chat
      );
      state.chats = state.chats.map((chat: any) =>
        chat.id === id ? { ...chat, favorite: !chat.favorite } : chat
      );
      state.favoriteChats = [...state.favChat, ...state.favTeamChat];
    },
    addMessage: (state, action) => {
      const { role, message } = action.payload;
      if (
        state.chat.length > 0 &&
        state.chat[state.chat.length - 1].role === "assistant"
      ) {
        state.chat[state.chat.length - 1].message += message;
      } else {
        state.chat.push({ id: 0, role, message });
      }
    },
    setActiveChat: (state, action) => {
      const { activeChat, profileUser, chat, lastMessage } = action.payload;
      state.activeChat = activeChat;
      state.profileUser = profileUser;
      state.chat = chat;
      state.lastMessage = lastMessage;
    },
    newThread: (state) => {
      state.activeChat = {};
      state.chat = [];
    },
    setLastMessage: (state, action) => {
      state.lastMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add extra reducers for async actions if needed
  },
  selectors: {
    selectChat: (state) => state.chat,
    selectTeamChats: (state) => state.chat.teamChats,
    selectFavoriteChats: (state) => state.chat.favoriteChats,
    selectActiveChat: (state) => state.chat.activeChat,
    selectLastMessage: (state) => state.chat.lastMessage,
  },
});

export const {
  selectChat,
  selectTeamChats,
  selectFavoriteChats,
  selectActiveChat,
  selectLastMessage,
} = chatSlice.selectors;

export const {
  setChatsAndContacts,
  addToFavorite,
  setActiveChat,
  newThread,
  setLastMessage,
  addMessage,
} = chatSlice.actions;

export const fetchChatsAndContacts =
  (q: string): AppThunk =>
  async (dispatch) => {
    try {
      // Fetch chats and teamChats data
      // Replace the following lines with actual API calls
      const chats: any = [];
      const teamChats: any = [];
      dispatch(setChatsAndContacts({ chats, teamChats }));
    } catch (error) {
      console.error("Error fetching chats and contacts:", error);
    }
  };

export const getChat =
  (userId: any): AppThunk =>
  async (dispatch) => {
    try {
      // Fetch chat data for the given userId
      // Replace the following lines with actual API calls
      const activeChat: any = {};
      const profileUser: any = activeChat?.fullName;
      const chat = activeChat?.chat;
      const lastMessage = activeChat?.lastMessage;
      dispatch(setActiveChat({ activeChat, profileUser, chat, lastMessage }));
    } catch (error) {
      console.error("Error fetching chat:", error);
    }
  };

export const sendMsg =
  (message: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLastMessage(message));
      dispatch(addMessage({ id: 0, role: "user", message }));

      const postData = {
        model: "srebot",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
        stream: true,
      };

      await sendMessageAndStream(
        "https://srebot.aokumo.beta.xpressai.cloud/chat/completions",
        postData,
        async (message, done) => {
          if (message !== "" && !done) {
            dispatch(addMessage({ id: 0, role: "assistant", message: "" }));
          }
        }
      );
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

export const updateLastMessage =
  (message: any): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLastMessage((prev: any) => prev + message));
    } catch (error) {
      console.error("Error updating last message:", error);
    }
  };

// export const selectChats = (state: any) => state.chat.chats;
// export const selectTeamChats = (state: any) => state.chat.teamChats;
// export const selectFavoriteChats = (state: any) => state.chat.favoriteChats;
// export const selectActiveChat = (state: any) => state.chat.activeChat;
// export const selectLastMessage = (state: any) => state.chat.lastMessage;
