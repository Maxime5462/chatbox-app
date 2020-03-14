import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyABXLMla_BC97FwbZa91pQWkZROMR5O9e4",
    authDomain: "chatbox-app-6e08c.firebaseapp.com",
    databaseURL: "https://chatbox-app-6e08c.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base