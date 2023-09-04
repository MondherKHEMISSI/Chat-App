import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react"
import { UserAuth } from "../context/AuthContext";
import { auth, db } from "../firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();
  
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if(value.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = auth.currentUser; 
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      });
    } catch(error) {
      console.log(error);
    }
    setValue("");
  };

  return (
    <div className="bg-slate-950 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
        <input placeholder="Write something..." value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-full" type="text" />
        {value && <button type="submit" className="btn btn-primary w-auto bg-violet-600 text-white rounded-l-full rounded-r-full ml-2 px-5 text-sm">🕊️</button>}
      </form>
    </div>
  )
}

export default SendMessage