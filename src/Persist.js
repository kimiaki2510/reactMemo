import React, { useState } from 'react'

function usePersist(ky, initVal) {
    //keyをセット
  const key = "hooks:" + ky 

  //valueの呼出
  const value = () => {
    try {
        //ページをリロードしてもデータが取得(localStorage)
      const item = window.localStorage.getItem(key)
      //Json形式に変更
      return item ? JSON.parse(item) : initVal
    } catch (err) {
      console.log(err)
      return initVal;
    }
  }

  //valueの書き込み
  const setValue = (val) => {
    try {
      setSavedValue(val)
       //ページをリロードしてもデータの書き込み(localStorage)
      window.localStorage.setItem(key, JSON.stringify(val))
    } catch (err) {
      console.log(err)
    }
  }
  const [savedValue, setSavedValue] = useState(value)

  return [savedValue, setValue]
}

export default usePersist