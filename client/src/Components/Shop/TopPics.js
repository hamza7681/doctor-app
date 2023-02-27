import React from "react";
import "./style.css";

const TopPics = () => {
  return (
    <>
      <div className="container-fluid mb-4">
        <div className="row">
          <div className="col-md-7">
            <div className="shop_pic1">
              <div className="med_align1">
                <h3 className="med_heading1">Panadol</h3>
                <div className="underline_div1"></div>
                <br />
                <p className="med_para1">
                  Panadol Advance 500 mg Tablets are a mild analgesic and
                  antipyretic, and are recommended for the treatment of most
                  painful and febrile conditions, for example, headache
                  including migraine and tension headaches etc
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
      
            <div className="shop_pic2">
              <div className="med_align2">
                <h3 className="med_heading2">Bascupan</h3>
                <div className="underline_div2"></div>
                <br />
                <p className="med_para2">
                  Buscopan relieves stomach cramps and period pains by helping
                  your digestive system and bladder relax
                </p>
              </div>
            </div>
            <div className="shop_pic3">
              <div className="med_align3">
                <h3 className="med_heading3">Deso-L</h3>
                <div className="underline_div3"></div>
                <br />
                <p className="med_para3">
                  Desloratadine is an antihistamine that is used to treat the
                  symptoms of allergies, such as sneezing, watery eyes, itching,
                  and runny nose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPics;
