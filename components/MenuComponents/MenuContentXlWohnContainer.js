import React from 'react'

const MenuContentXlWohnContainer = ({data}) => {
  return (
    <div>
        <header>
 
          <div >
            <div className="container ">
              <div className="row">
                <div className="col-lg-12  ">
                  <div className=" ml-0 mr-0 p-4  ">
                    <h1 className="mt-3 mb-3 text-dark d-flex justify-content-center ">
                      {data.title.first}
                    </h1>
                    <h2 className="mt-3 mb-3 text-dark  ">
                      {data.title.second}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.first}
                    </p>
                    <h2 className="mt-3 mb-3 text-dark ">
                      {data.title.third}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-8 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image1}
                        ></img>
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.second}
                        </p>
                      </div>
                    </div>

                    <h2 className="mt-3 mb-3 text-dark ">
                      {data.title.forth}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-8 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image2}
                        ></img>
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.third}
                        </p>
                      </div>
                    </div>
                    <h2 className="mt-3 mb-3 text-dark ">
                      {data.title.fifth}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-8 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image3}
                        ></img>
                      </div> */}
                      <div className="col-12">
                        <p className="   fz-20 text-justify text-dark">
                          {data.content.forth}
                        </p>
                      </div>
                    </div>
                    <h2 className="mt-3 mb-3 text-dark d-flex">
                      {data.title.sixth}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.fifth}
                    </p>
                    <h2 className="mt-3 mb-3 text-dark d-flex">
                      {data.title.eidth}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.sixth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.seventh}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.eidth}
                    </p>
                    <h2 className="mt-3 mb-3 text-dark d-flex">
                      {data.title.ninth}
                    </h2>
                    <div className="row justify-content-center">
                      {/* <div className="col-8 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image4}
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
                    <h2 className="mt-3 mb-3 text-dark d-flex">
                      {data.title.thenth}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.eleventh}
                    </p>
                    <h2 className="mt-3 mb-3 text-dark d-flex">
                      {data.title.eleven}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.twelvth}
                    </p>
                    <h2 className="mt-3 mb-3 text-dark d-flex">
                      {data.title.twelve}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.thirteen}
                    </p>
                    <h2 className="mt-3 mb-3 text-dark d-flex">
                      {data.title.thirteen}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.forteen}
                    </p>
                    <h2 className="mt-3 mb-3 text-dark d-flex">
                      {data.title.forteen}
                    </h2>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.fifteen}
                    </p>
                    <h2 className="mt-3 mb-3 text-dark d-flex">
                      {data.title.fifteen}
                    </h2>
                    <ul className="mt-2 mb-2 fz-20 text-justify">
                      <li className="mt-2">
                      ●	Montaj ve tamir işlerinden zevk alanlar için güzel bir eğlencedir.
                      </li>
                      <li className="mt-2">
                      ●	Contain Haus XL yaşam konteynerler sayesinde mobil ve bağımsız olabilirsiniz. Yani istediğiniz zaman sırt çantanızı alır gibi konteynırınızı alarak istediğiniz yere taşıyabilir, özgürlüğün tadını çıkarabilirsiniz. 
                      </li>
                      <li className="mt-2">
                      ●	Contain Haus XL Yaşam konteyneri istediğiniz gibi tasarlayabilir, kapı, pencere, wc, banyo kısımlarını arzu ettiğiniz yere koyabilirsiniz. 
                      </li>
                      <li className="mt-2">
                      ●	Contain Haus XL yaşam konteynerlerinin en büyük avantajlarından birisi de yüksek izolasyona sahip olmasıdır. 
                      </li>
                      <li className="mt-2">
                      ●	Contain Haus XL yaşam konteynerleri 9.00 şiddetinde depreme dayanıklı olacak şekilde tasarlanmıştır. 
                      </li>
                      <li className="mt-2">
                      ●	Paslanmaz çelikten yapılan Contain Haus XL yaşam konteynerleri onlarca sene sağlamlığını korur. 
                      </li>
                      <li className="mt-2">
                      ●	Fibersement tabanı ile ofis konteyner zeminleri oldukça sağlamdır, betondan farksızdır.
                      </li>
                      <li className="mt-2">
                      ●	Contain Haus XL yaşam konteynerlerin alt ve üst şase genişliği 15 cm’dir
                      </li>
                      <li className="mt-2">
                      ●	Contain Haus XL yaşam konteynerler ısıya dayanıklı ve su geçirmezdirler. 
                      </li>
                      <li className="mt-2">
                      ●	Duvarları oluşturan 5 cm’lik sandviç paneller ile izolasyon oldukça yüksek seviyededir. 
                      </li>
                      <li className="mt-2">
                      ●	Contain Haus XL yaşam konteynerler nem geçirmezliği ve ses geçirmezlik açısından iyi bir performansa sahiptir.


                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
      </header>
    </div>
  )
}

export default MenuContentXlWohnContainer