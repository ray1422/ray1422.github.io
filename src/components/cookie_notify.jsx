
import a from 'just-detect-adblock';
import React, { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Foo(props) {
  useEffect(() => {
    console.log("wwweeeee")
    toast.dark(<div><strong> 🍪 我們使用 Cookie! </strong><br />繼續瀏覽網頁以及關閉通知代表你同意我們使用 Cookie。</div>, {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: ()=>{window.localStorage.useCookie = "true"}
    })
  })

  return <ToastContainer />
}
