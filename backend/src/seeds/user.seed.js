import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "emma@email.com",
    fullName: "Emma Thomas",
    password: "123456",
    profilePic: "https://plus.unsplash.com/premium_photo-1739376473691-cdc1db244ac6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxhdmF0YXJzfGVufDB8fDB8fHww",
  },
  {
    email: "olivia@email.com",
    fullName: "Olivia Jackson",
    password: "123456",
    profilePic: "https://plus.unsplash.com/premium_photo-1738776254643-b853838818bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHxhdmF0YXJzfGVufDB8fDB8fHww",
  },
  {
    email: "sophia@email.com",
    fullName: "Sophia Williams",
    password: "123456",
    profilePic: "https://plus.unsplash.com/premium_photo-1738449261730-2bc6a8ab40b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIxfHxhdmF0YXJzfGVufDB8fDB8fHww",
  },
  {
    email: "ava@email.com",
    fullName: "Ava Mae",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1728729729215-00ae703063ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA0fHxhdmF0YXJzfGVufDB8fDB8fHww",
  },
  {
    email: "erin@email.com",
    fullName: "Erin Brown",
    password: "123456",
    profilePic: "https://plus.unsplash.com/premium_photo-1738822251828-2307c272d036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzIxfHxhdmF0YXJzfGVufDB8fDB8fHww",
  },
  {
    email: "james@email.com",
    fullName: "James Andrews",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1740252117044-2af197eea287?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    email: "william@email.com",
    fullName: "William Brown",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1740252117012-bb53ad05e370?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    email: "benjamin@email.com",
    fullName: "Benjamin Smith",
    password: "123456",
    profilePic: "https://images.unsplash.com/photo-1740252117013-4fb21771e7ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    email: "lucas@email.com",
    fullName: "Lucas Simpson",
    password: "123456",
    profilePic: "https://plus.unsplash.com/premium_photo-1739178656537-ea88ababab9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    email: "henry@email.com",
    fullName: "Henry Fitzgerald",
    password: "123456",
    profilePic: "https://plus.unsplash.com/premium_photo-1738776254709-a8872157f87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();