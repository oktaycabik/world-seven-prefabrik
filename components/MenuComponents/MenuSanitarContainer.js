import React from 'react'

const MenuSanitarContainer = ({data}) => {
  return (
    <>
 <header>
  
          <div >
            <div className="container ">
              <div className="row">
                <div className="col-lg-12  ">
                  <div className=" ml-0 mr-0 p-4  ">
                    <h1 className="text-dark mt-3 mb-3 d-flex  justify-content-center ">
                      {data.title.first}
                    </h1>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.first}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.second}
                    </p>
                    <h2 className="text-dark mt-3 mb-3   ">
                      {data.title.twelvth}
                    </h2>
                    <ul className="mt-2 mb-2 fz-20 text-justify">
                      <li className="mt-2">
                      İnşaat sektöründe şantiyelerde, 
                      </li>
                      <li className="mt-2">Konser alanlarında,</li>
                      <li className="mt-2">Sahil kenarlarında,</li>
                      <li className="mt-2">Havuz İşletmelerinde,</li>
                      <li className="mt-2">Spor tesislerinde,</li>
                      <li className="mt-2">Kafe ve restoranlarda,</li>
                      <li className="mt-2">Kamplarda,</li>
                      <li className="mt-2">Fuar alanlarında,</li>
                      <li className="mt-2">
                      İşletmelerde WC Duş konteynelerleri kullanılmaktadır. 
                      </li>
                    </ul>
                    <h2 className="text-dark mt-3 mb-3   ">
                      {data.title.third}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.third}
                    </p>
                    <h2 className="text-dark mt-3 mb-3  ">
                      {data.title.forth}
                    </h2>

                    <div className="row justify-content-center mt-3 mb-3">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12">
                        <img src={data.content.image1} />
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.forth}
                        </p>
                      </div>
                    </div>

                    <h2 className="text-dark mt-3 mb-3 ">
                      {data.title.fifth}
                    </h2>
                    <div className="row justify-content-center mt-3 mb-3">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12">
                        <img src={data.content.image2} />
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.fifth}
                        </p>
                      </div>
                    </div>
                    <h2 className="text-dark mt-3 mb-3 d-block justify-content-center">
                      {data.title.sixth}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.sixth}
                    </p>
                  </div>
                  <h2 className="text-dark mt-3 mb-3 ">{data.title.eidth}</h2>
                  <p className="   fz-20 text-justify text-dark">
                    {data.content.seventh}
                  </p>
                  <h2 className="text-dark mt-3 mb-3 ">{data.title.ninth}</h2>
                  <ul className="mt-2 mb-2">
                    <li className="mt-2">
                    •	Contain Haus Wc-Duş Konteynerleri spor tesisleri, park, bahçeler, inşaatlar, fuarlar, alışveriş merkezleri, benzin istasyonları ve aklınıza gelebilecek birçok alanda rahatlıkla kullanılabilir. 
                    </li>
                    <li className="mt-2">
                    •	Sağlamlığı ile Wc- Duş konteynerleri uzun ömürlü ve kullanıldığı malzemeler ile sağlık açısından bakterilerin oluşumunu önleyici bir yapıya sahiptir. 
                    </li>
                    <li className="mt-2">•Kokuyu dışarıya çıkarmaz. </li>
                    <li className="mt-2">
                    •	Contain Haus Wc-Duş konteynerlerinin için ergonomik bir yapıya sahiptir, genişlik, en, boy açısından bir kişinin rahatlıkla sığabileceği boyuttadır. 
                    </li>
                    <li className="mt-2">
                    •	Wc-Duş konteynerlerimizde havalandırma penceresi, lavabo ve klozet bulunmaktadır. 
                    </li>
                    <li className="mt-2">
                    •	Ayrıca bu konteynerlerin en önemli özelliği taşınabilir, modüler bir yapıya sahip oluşlarıdır. 
                    </li>
                    <li className="mt-2">
                    •	Contain Haus sizin rahatlığınıza önem verir. İşte tam bu yüzden Contain Haus WC-Duş konteynerleri sıkıştığınızda yanınızda! 
                    </li>
                  </ul>
                  <h2 className="text-dark mt-3 mb-3 ">{data.title.thenth}</h2>
                  <div className="row justify-content-center mt-3 mb-3">
                    {/* <div className="col-lg-8 col-md-12 col-sm-12">
                      <img src={data.content.image3} />
                    </div> */}
                    <div className="col-12">
                      <p className="   fz-20 text-justify text-dark">
                        {data.content.eidth}
                      </p>
                      <p className="   fz-20 text-justify text-dark">
                        {data.content.ninth}
                      </p>
                    </div>
                  </div>

                  <h2 className="text-dark mt-3 mb-3 ">{data.title.eleven}</h2>
                  <ul className="mt-2 mb-2">
                    <li className="mt-2">
                      ● Wc-duş Konteynerleri rahatlıklar bir yerden başka bir yere taşınabilir. 
                    </li>
                    <li className="mt-2">
                      ● Oldukça sağlam malzeme kalitesi ile uzun ömürlüdür. 
                    </li>
                    <li className="mt-2">
                      ● Bakterilere üreme olanağı sağlamaz. 
                    </li>
                    <li className="mt-2">
                      ● Yeterli genişliğe sahiptir, rahat bir kullanım alanı sunar. 
                    </li>
                    <li className="mt-2">
                      ● Giriş kapısı, havalandırma penceresi ve elektrik, su bağlantısı bulunmaktadır. 
                    </li>
                    <li className="mt-2">
                      ● Contain Haus Wc-Duş konteynerlerinin farklı model seçenekleri müşteri talebine göre hazırlanmaktadır. 
                    </li>
                    <li className="mt-2">
                      ● Yüksek malzeme kalitesi ve ince işçilik ile Contain Haus Wc-Duş konteyleri rakiplerinden öne çıkmaktadır.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
      </header>

    </>
  )
}

export default MenuSanitarContainer