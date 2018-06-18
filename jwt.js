/*
    https://jwt.io/
    JWT의 구조
    aaaaaa.bbbbbb.cccccc
    헤더(header).내용(payload).서명(signature)
*/
var crypto = require('crypto');
var express = require('express');
var app = express();
// #Step1. header(헤더)
const header ={
    alg : 'HS256', //HMAC SHA256(Hash-based Message Authentication Code)
    typ : 'JWT'
};

// #Step2. payload(내용)
const payload={
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
  }
/*
    #1. 등록된 클레임
    iss : 토큰 발급자 issuer
    sub : 토큰 제목(subject)
    aud : 토큰 대상자(audience)
    exp : 토큰 만료시간(expiration) NumaricDate 형식!
    nbf : Not Before 토큰 활성 날짜!! NumaricDate 형식!
    iat : issued at 토큰 발급 시간
    jti : JWT 고유식별자. 중복처리 방지를 위해 사용(1회용 토큰에 유용함.)

    #2. 공개(public) 클레임 - 충돌방지용 URL형식을 사용.
    "https://close852.tistory.com/" : true

    #3. 비공개(private) 클레임 - ifId를 사용
    username : 'close852'

*/


const encodedPayload = new Buffer(JSON.stringify(payload)).toString('base64').replace(/=/gi,'');
// #Step3. signature
var base64UrlEncode =(encode)=>{
    return new Buffer(JSON.stringify(encode)).toString('base64').replace(/=/gi,''); 
}
HMAC-ShA256
const signature = crypto.createHmac('sha256','secret')
        .update(base64UrlEncode(header)+'.'+base64UrlEncode(payload))
        .digest('base64')
        .replace(/=/gi,'');

console.log('header : '+base64UrlEncode(header));
console.log('payload : '+base64UrlEncode(payload));
console.log('signature : '+signature);
var hashing =base64UrlEncode(header)+'.'+base64UrlEncode(payload)+'.'+signature;
console.log(hashing);

app.listen(3000,(req,res)=>{
    console.log('connected port 3000!');
})