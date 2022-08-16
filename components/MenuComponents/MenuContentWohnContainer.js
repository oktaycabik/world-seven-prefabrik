import React from 'react'

const MenuContentWohnContainer = ({data}) => {
  return (
    <div>
         <header>
  
          <div key={data.id}>
            <div className="container ">
              <div className="row ">
                <div className="col-lg-12 ColorSelectorDiv ">
                  <div className="caption ml-0 mr-0 p-4 ColorSelectorDivCaption ">
                    <h1 className=" mt-3 mb-3  text-dark d-flex justify-content-center ">
                      {data.title.first}
                    </h1>
                    <h2 className=" mt-3 mb-3  text-dark mt-3 mb-3">
                      {data.title.second}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-3 mb-3 ">
                        <img
                          className="rounded content-image"
                          src={data.content.image1}
                        ></img>
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.first}
                        </p>

                        <p className="   fz-20 text-justify text-dark">
                          {data.content.second}
                        </p>
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.third}
                        </p>
                      </div>
                    </div>
                    <h2 className=" mt-3 mb-3  text-dark   ">
                      {data.title.third}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.forth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.fifth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.sixth}
                    </p>

                    <h2 className=" mt-3 mb-3  text-dark   ">
                      {data.title.forth}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-3 mb-3">
                        <img
                          className="rounded content-image"
                          src={data.content.image2}
                        ></img>
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.seventh}
                        </p>
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.eidth}
                        </p>
                      </div>
                    </div>

                    <h2 className=" mt-3 mb-3  text-dark  ">
                      {data.title.fivth}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-3 mb-3">
                        <img
                          className="rounded content-image"
                          src={data.content.image3}
                        ></img>
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.ninth}
                        </p>
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.tenth}
                        </p>
                      </div>
                    </div>

                    <h3 className=" mt-3 mb-3  text-dark">
                      {data.title.sixth}
                    </h3>

                    <p className="   fz-20 text-justify text-dark">
                      {data.content.eleventh}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.twelth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.thirteen}
                    </p>
                  </div>
                  <h3 className=" mt-3 mb-3  text-dark">
                    {data.title.seventh}
                  </h3>

                  <div className="row justify-content-center">
                    {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-3 mb-3">
                      <img className="rounded content-image" src={data.content.image4}></img>
                    </div> */}
                    <div className="col-12">
                      <p className="   fz-20 text-justify text-dark">
                        {data.content.forteen}
                      </p>
                      <p className="   fz-20 text-justify text-dark">
                        {data.content.fivteen}
                      </p>
                    </div>
                  </div>

                  <h2 className=" mt-3 mb-3  text-dark ">
                    {data.title.eigth}
                  </h2>

                  <div className="row justify-content-center">
                    {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-3 mb-3 ">
                      <img className="rounded content-image" src={data.content.image5}></img>
                    </div> */}
                    <div className="col-12">
                      <p className="   fz-20 text-justify text-dark">
                        {data.content.sixteen}
                      </p>
                      <p className="   fz-20 text-justify text-dark">
                        {data.content.seventeen}
                      </p>
                      <p className="   fz-20 text-justify text-dark">
                        {data.content.eighteen}
                      </p>
                      <p className="   fz-20 text-justify text-dark">
                        {data.content.nineteen}
                      </p>
                    </div>
                  </div>
                  <h2 className=" mt-3 mb-3  text-dark ">
                    {data.title.ninth}
                  </h2>

                  <ul className="mt-2 mb-2 fz-20 text-justify">
                    <li className="mt-2">
                    ● Ev yaşam kapları kolayca içinde olabilir
                      Spor tesisleri, parklar, bahçeler, binalar, fuarlar,
                      Alışveriş merkezleri, benzin istasyonları ve daha birçok alan
                      hayal edebileceğiniz şekilde kullanılır.
                    </li>
                    <li className="mt-2">
                    ● Yaşam konteynerleri, dayanıklılıkları nedeniyle
                      uzun ömürlü ve ile çalışan bir yapı
                      Kullanılan malzemeler bakteri oluşumunu göz önünde bulundurarak
                      sağlığı engelledi.
                    </li>

                    <li className="mt-2">
                    ● Yaşam konteynerlerimizde havalandırma pencereleri mevcuttur,
                      lavabolar ve klozetler.
                    </li>
                    <li className="mt-2">
                    ● Contain house konforunuzu önemser. Bu nedenle
                      Contain Haus'tan gelen yaşam konteynerleri, bu gerçekleştiğinde oradalar
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
      </header>
    </div>
  )
}

export default MenuContentWohnContainer