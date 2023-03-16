import { useEffect, useState, useRef  } from 'react';
import TestData from './TestData.json';
import './App.css';
import liff from '@line/liff';

// 選択ジャンル
let selectedGenre;

// LINEプロフィール情報
let userId;
let displayName;
let pictureUrl;

// 検索結果表示数
let num = 5;

// プロフ開閉判定
//const [isOpened, setOpened] = useState(false);

// LINEログイン
const loginLine = () => {
    liff.init({ liffId: process.env.REACT_APP_LIFF_ID }).then(async () => {
        if (!liff.isLoggedIn()) {
            await liff.login();
        }
    }).then(async () => {
        if(liff.isLoggedIn()){
            await liff.getProfile().then((profile) => {
                displayName = profile.displayName;
                pictureUrl = profile.pictureUrl;
            });
        }else{
            loginLine();
        }
    });
}

// LINEトークルームmessage送信
const sendMessage = (name,address,rating,img,url) => {
    liff.sendMessages([
        {
            type: 'template',
            altText: '「あとから行く！」が追加されました。',
            template: {
                type: 'buttons',
                thumbnailImageUrl: img,
                imageAspectRatio: 'rectangle',
                imageSize: 'contain',
                title: `${name} ★${rating}`,
                text: address,
                actions: [
                {
                    type: 'uri',
                    label: 'Google Mapを開く',
                    uri: encodeURI(url)
                }
                ]
            }
        },
    ])
    .then(() => {
        console.log("message sent");
        // ウィンドウを閉じる
        liff.closeWindow();
    })
    .catch((err) => {
        console.log("error", err);
    });
        
}

// LINEメッセージ共有
const shareMessage = (name,address,rating,img,url) => {
    liff.shareTargetPicker(
        [
        {
            type: 'template',
            altText: `${displayName}さんから共有されました。`,
            template: {
                type: 'buttons',
                thumbnailImageUrl: img,
                imageAspectRatio: 'rectangle',
                imageSize: 'contain',
                title: `${name} ★${rating}`,
                text: address,
                actions: [
                {
                    type: 'uri',
                    label: 'Google Mapを開く',
                    uri: encodeURI(url)
                }
                ]
            }
        },
        ],
        {
        isMultiple: true,
        }
    )
    .then(function (res) {
        if (res) {
        // メッセージ送信成功
        console.log(`[${res.status}] Message sent!`);
        } else {
        // メッセージ送信キャンセル
        console.log("TargetPicker was closed!");
        }
    })
    .catch(function (error) {
        // 送信前エラー
        console.log("something wrong happen");
    });
}

//google map url生成
const go_now = (name,address) => {
    const urlTmp = 'https://www.google.com/maps/search/?api=1&query=';
    const url = urlTmp + name + " " + address;
    return url;
}
    

const App = () => {
    // useEffect 2重起動防止
    const didLogRef = useRef(false);
    
    const [isSearched, setSearched] = useState(false);
    
    useEffect(() => {
        // 多重呼び出し防止
        if (didLogRef.current === false) {
            didLogRef.current = true;
            loginLine();
        }

    });
    
    //検索開始時処理
    const startSearch = () =>{
        console.log("start");
        new Promise((resolve) => {
            //選択したジャンル
            selectedGenre = document.getElementById("genre_select").value;
            resolve();
        }).then(() => {
            //displayResult(selectedGenre);
            //検索結果DOM表示
            setSearched(true);
        })
    }
    
    return (
        <div className="App">
            <h1 id='title'>脱密アプリ</h1>
            <div id="genre_select_wrap">
                <h3>カテゴリを選択</h3>
                <form>
                    <select name='genre' id='genre_select'>
                        <option value="0">飲食店</option>
                        <option value="1">コンビニ</option>
                        <option value="2">書店</option>
                    </select>
                </form>
                <h3>エリアを選択</h3>
                <form>
                    <select name='area' id='area_select'>
                        <option value="0">現在地</option>
                        <option value="1">東京都</option>
                        <option value="2">神奈川県</option>
                        <option value="3">埼玉県</option>
                        <option value="4">千葉県</option>
                    </select>
                </form>
                <button id="search" onClick={startSearch}>検索</button>
            </div>
            {isSearched &&
                <Result genre={selectedGenre} />
            }
        </div>    
    )
}

// ヘッダーコンポーネント
const Header = () => {
    return (
        <div id='header_wrap'>
            <div id='title_wrap'>
                <h1 id='title'>脱密アプリ</h1>
            </div>
            <div id='profile_btn_button'>
                <button id='profile_btn' onClick={openProfile}>
                    <img src={pictureUrl} alt='button'/>
                </button>
            </div>
        </div>
    )
}

// プロフィールモーダル
const LoginUser = () => {
    return (
        <div id='login_user_wrap'>
            <button id='close_login_user' onClick={closeProfile}>✕</button>
            <div id='profile_wrap'>
                <img src={pictureUrl}/>
                <h6>{userId}</h6>
                <h4>{displayName}</h4>
            </div>
            <button id='logout'>ログアウト</button>
        </div>
    )
}

const openProfile = () => {
    //setOpened(true);
}

const closeProfile = () => {
    //setOpened(false);
}

//結果表示（複数個表示）
const Result = (props) => {
    let results = [];
    for(let i = 0;i < num;i++){
        results.push(ResultInner(i,props.genre));
    }
    return(
        <div>{results}</div>
    )
}

const ResultInner = (n,genre) => {
    return(
     <div className='resultBox_wrap'>
        <img className='resultImg' src={TestData[genre].item[n].img} />
        <div className='resultBox'>
            <h1>{TestData[genre].item[n].name}</h1>
            <h2 className="rating">★{TestData[genre].item[n].rating}</h2>
            <h3>{TestData[genre].item[n].address}</h3>
            <h3>混雑度：{TestData[genre].item[n].busy} ％</h3>
            <a href={go_now(TestData[genre].item[n].name,TestData[genre].item[n].address)} target="_blank" rel="noopener noreferrer">
                <button className="go_now">今すぐ行く！</button>
            </a>
            <button className="go_after" onClick={() => sendMessage(TestData[genre].item[n].name,TestData[genre].item[n].address,TestData[genre].item[n].rating,TestData[genre].item[n].img,go_now(TestData[genre].item[n].name,TestData[genre].item[n].address))}>あとから行く！</button>
            <button className="share_friends" onClick={() => shareMessage(TestData[genre].item[n].name,TestData[genre].item[n].address,TestData[genre].item[n].rating,TestData[genre].item[n].img,go_now(TestData[genre].item[n].name,TestData[genre].item[n].address))}>友達に共有する！</button>
        </div>
    </div>
    )
}

export default App;