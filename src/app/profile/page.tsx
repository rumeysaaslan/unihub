import React from 'react'

function Profile() {
  return (
    <div style={{display:"flex", flexDirection:"row", backgroundColor:'#efe8dd' }} className='space-x-30 justify-center  h-screen'>
    <div className='flex justify-center  '>
      <ol>- Profil-
        <li>Kullaniciadi-soyadi</li>
        <li>Cinsiyet</li>
        <li>Okudugu sehir</li>
        <li>Okudugu okul</li>
        <li>Kaldigi kyk ismi </li>
      </ol>
    </div>

    <div>
    <div className='flex justify-center items-center '>
      <ol>- Bildirimler -
        <li>Tüm Bildirimler</li>
        <li>Kahvalti bitiş hatirlaticisi</li>
        <li>Akşam yemeği bitiş hatırlatıcısı</li>
        <li>Sevmedigi yemekler listesi</li>
        <li>Gunluk yemek wigged</li>
        <li>Yurt etkinlik bildirimleri </li>
      </ol>
    </div>

    </div>
    
    </div>
  )
}

export default Profile