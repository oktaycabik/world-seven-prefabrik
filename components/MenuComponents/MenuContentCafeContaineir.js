import React from "react";

const MenuContentCafeContaineir = ({ data }) => {
  return (
    <>
      <header>
        <div>
          <div className="container ">
            <div className="row ">
              <div className="col-lg-12  ">
                <div className=" ml-0 mr-0 p-4  ">
                  <h1 className=" text-dark d-flex justify-content-center ">
                    {data.title.first}
                  </h1>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.first}
                  </p>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.second}
                  </p>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.third}
                  </p>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.forth}
                  </p>
                  <h2 className=" text-dark ">{data.title.second}</h2>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.fifth}
                  </p>
                  <h2 className=" text-dark d-flex  ">{data.title.third}</h2>
                  <div className="row">
                    {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-3 mb-3">
                      <img src={data.content.image1} />
                    </div> */}
                    <div className="col-12">
                      <p className="  fz-20 text-justify text-dark">
                        {data.content.sixth}
                      </p>
                      <p className="  fz-20 text-justify text-dark">
                        {data.content.seventh}
                      </p>
                    </div>
                  </div>

                  <h2 className=" text-dark d-flex  ">{data.title.forth}</h2>
                  <div className="row">
                    {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-3 mb-3">
                      <img src={data.content.image2} />
                    </div> */}
                    <div className="col-12">
                      <p className="  fz-20 text-justify text-dark">
                        {data.content.eidth}
                      </p>
                      <p className="  fz-20 text-justify text-dark">
                        {data.content.ninth}
                      </p>
                    </div>
                  </div>
                  <h2 className=" text-dark ">{data.title.fifth}</h2>
                  <ul className="mt-2 mb-2 fz-20 text-justify">
                    <li className="mt-2">
                      ● Fiyat avantajı ile kafe konteynerları tam bir bütçe dostudur. 
                    </li>
                    <li className="mt-2">
                      ● Kafe konteynerler sayesinde mobil ve bağımsız olabilirsiniz. Yani istediğiniz zaman sırt çantanızı alır gibi konteynırınızı alarak istediğiniz yere taşıyabilir, özgürlüğün tadını çıkarabilirsiniz. 
                    </li>
                    <li className="mt-2">
                      ● Kafe konteyneri istediğiniz gibi tasarlayabilir, kapı, pencere, wc, banyo kısımlarını arzu ettiğiniz yere koyabilirsiniz. 
                    </li>
                    <li className="mt-2">
                      ● •	Contain Haus kafe konteynerlerinin en büyük avantajlarından birisi de yüksek izolasyona ve malzeme kalitesine sahip olmasıdır. 
                    </li>
                    <li className="mt-2">
                      ● •	Paslanmaz çelikten yapılan Contain Haus kafe konteynerleri onlarca sene sağlamlığını korur. 
                    </li>
                    <li className="mt-2">
                      ● Mit seiner Faserzementbasis sind Containerböden für
                      Cafés ziemlich langlebig und von Beton nicht zu
                      unterscheiden.
                    </li>
                    <li className="mt-2">
                      ● Fibersement tabanı ile kafe konteyner zeminleri oldukça sağlamdır, betondan farksızdır.
                    </li>
                    <li className="mt-2">
                      ● 	Kafe konteynerler ısıya dayanıklı ve su geçirmezdirler. 
	Duvarları oluşturan 5 cm’lik sandviç paneller ile izolasyon oldukça yüksek seviyededir. 

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MenuContentCafeContaineir;
