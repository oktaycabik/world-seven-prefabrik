import React from "react";
import Link from "next/link";
import Image from "next/image";
const ContainerAnimation = () => {
  return (
    <>
      <div>
        <div className="container mt-4  border-bottom">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 item position-relative ">
              <div className="d-flex pb-4 justify-content-center position-relative">
                <div className="p-0 m-0 hoverItemmm">
                  <Image
                    src="/assets/img/Animation/Container.webp"
                    width={450}
                    height={200}
                    alt="Card image cap"
                  />
                </div>
                <Image
                  src="/assets/img/Animation/DotBase.webp"
                  layout="fill"
                  className=" bottom1"
                  alt=""
                />
              </div>
              <h5>Tekil Temel</h5>
              <p>
                Tekil temeller, konteynerler için en popüler temel türüdür.
                Tekil temeller, Yapı desteklerin alt tarafına düzenlenmiştir.
                Kesin ölçümler için lütfen servis ekibimizden bir temel planı
                isteyin.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 item position-relative ">
              <div className="d-flex pb-4 justify-content-center position-relative">
                <div className="p-0 m-0 hoverItemmm">
                  <Image
                    src="/assets/img/Animation/Container.webp"
                    width={450}
                    height={200}
                    alt="Card image cap"
                  />
                </div>
                <Image
                  src="/assets/img/Animation/beton-zemin.webp"
                  layout="fill"
                  className=" bottom1"
                  alt=""
                />
              </div>
              <h5>Şerit Temelleri</h5>
              <p>
                Şerit temelleri çok popüler ve yaygındır. Üzerlerine inşa edilen
                taşıyıcı duvarların yüklerini devralırken, yük taşımayan iç
                duvarlar genellikle doğrudan zemin döşemesine monte edilir.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 item position-relative ">
              <div className="d-flex pb-4 justify-content-center position-relative">
                <div className="p-0 m-0 hoverItemmm">
                  <Image
                    src="/assets/img/Animation/Container.webp"
                    width={450}
                    height={200}
                    alt="Card image cap"
                  />
                </div>
                <Image
                  src="/assets/img/Animation/2.webp"
                  layout="fill"
                  className=" bottom1"
                  alt=""
                />
              </div>
              <h5>Taban Yapı Plaka Temelleri</h5>
              <p>
                Tam Döşemeli Yapı Plaka Temelleri veya Tam Taban Yapı Plakaları,
                ağır inşaat yükleri nedeniyle tek veya şerit yapı temelleri
                ekonomik olmadığında kullanılır. Kesin ölçümler için lütfen
                servis ekibimizden bir temel yapı planı isteyin.
              </p>
            </div>
            <div className="col-12 text-center mb-3 mt-4">
              <Link href="/shop/burocontainer">
                <span className="animation-button">Ürünlerimiz</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerAnimation;
