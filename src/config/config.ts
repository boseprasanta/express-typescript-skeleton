import "dotenv/config"
import firebase from "./firebase";

export default {
    port: process.env.PORT || 3000,
    ...firebase
};