import { User } from "@/types";

/**
 * This array simulates a database consisting of a list of users.
 * After signing up with your auth solution (e.g. GitHub, Auth0)
 * place your user info in an object, with the email address you used
 * as the id.
 * The groupIds are the names of the groups the user is part of.
 * Group info is in /data/groups.ts
 */
export const users: Omit<User, "color">[] = [
  /*
  {
    id: "[YOUR EMAIL ADDRESS]",
    name: "[YOUR DISPLAY NAME]",
    avatar: "https://liveblocks.io/avatars/avatar-0.png",
    groupIds: ["product", "engineering", "design"],
  },
  */
  {
    id: "aditya.bhamidipati@gmail.com",
    name: "Aditya Bhamidipati",
    avatar: "https://liveblocks.io/avatars/avatar-2.png",
    groupIds: ["product", "engineering", "design"],
  },
  {
    id: "raj.t@gmail.com",
    name: "Tejaswi Raj",
    avatar: "https://liveblocks.io/avatars/avatar-3.png",
    groupIds: ["engineering"],
  },
  {
    id: "danger_mani@gmail.com",
    name: "Meher Mani,
    avatar: "https://liveblocks.io/avatars/avatar-4.png",
    groupIds: ["engineering", "design"],
  },
  {
    id: "dhanush.patel@gmail.com",
    name: "Dhanush Patel",
    avatar: "https://liveblocks.io/avatars/avatar-5.png",
    groupIds: ["product"],
  },
  {
    id: "ajay.marka@gmail.com",
    name: "Mraka Ajay",
    avatar: "https://liveblocks.io/avatars/avatar-6.png",
    groupIds: ["product", "design"],
  },
];
