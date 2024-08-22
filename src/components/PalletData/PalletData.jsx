import { useState } from "react";
import { useEffect } from "react";
import style from './PalletData.module.css';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PalletData=()=>{

    const [data,setData]=useState([])

    useEffect(()=>{
fetch('http://localhost:8981/').then((res)=>res.json()).then((datas)=>{
    setData(datas.data)
})
    },[])


const palletItemRow1=data.filter((ele,ind)=>{
return ind<44 }
).map((ele,ind)=>
<span className={style.item}>
       <Row>
        <Col><strong>Storage Type </strong></Col>
        <Col>{ele.storageType}</Col>
      </Row>
      <Row>
        <Col><strong>Storage Bin </strong> </Col>
        <Col>{ele.storageBin}</Col>
      </Row>
      <Row>
        <Col><strong>Plant </strong> </Col>
        <Col>{ele.plant}</Col>
      </Row>
       </span>
       
)

const palletItemRow2=data.filter((ele,ind)=>{
    return  ind>43 && ind<88 }
    ).map((ele,ind)=>
    <span className={style.item}>
            <Row>
        <Col><strong>Storage Type </strong> </Col>
        <Col>{ele.storageType}</Col>
      </Row>
      <Row>
        <Col><strong>Storage Bin </strong> </Col>
        <Col>{ele.storageBin}</Col>
      </Row>
      <Row>
        <Col><strong>Plant </strong> </Col>
        <Col>{ele.plant}</Col>
      </Row>
            </span>
    )
    
    const palletItemRow3=data.filter((ele,ind)=>{
        return ind>87 && ind<132 }
        ).map((ele,ind)=>
        <span className={style.item}>
               <Row>
        <Col><strong>Storage Type </strong> </Col>
        <Col>{ele.storageType}</Col>
      </Row>
      <Row>
        <Col><strong>Storage Bin  </strong></Col>
        <Col>{ele.storageBin}</Col>
      </Row>
      <Row>
        <Col><strong>Plant  </strong></Col>
        <Col>{ele.plant}</Col>
      </Row>
               </span>
        )

        const palletItemRow4=data.filter((ele,ind)=>{
            return ind>131 && ind<176 }
            ).map((ele,ind)=>
            <span className={style.item}>
                  <Row>
        <Col><strong>Storage Type</strong> </Col>
        <Col>{ele.storageType}</Col>
      </Row>
      <Row>
        <Col><strong>Storage Bin</strong> </Col>
        <Col>{ele.storageBin}</Col>
      </Row>
      <Row>
        <Col><strong>Plant</strong> </Col>
        <Col>{ele.plant}</Col>
      </Row>
                   </span>

                   
            )

            const palletItemRow5=data.filter((ele,ind)=>{
                return ind>175 && ind<220 }
                ).map((ele,ind)=>
                <span className={style.item}>
                     <Row>
        <Col><strong>Storage Type</strong> </Col>
        <Col>{ele.storageType}</Col>
      </Row>
      <Row>
        <Col><strong>Storage Bin</strong> </Col>
        <Col>{ele.storageBin}</Col>
      </Row>
      <Row>
        <Col><strong>Plant</strong></Col>
        <Col>{ele.plant}</Col>
      </Row>
                       </span>
                )

                const palletItemRow6=data.filter((ele,ind)=>{
                    return ind>219 && ind<264 }
                    ).map((ele,ind)=>
                    <span className={style.item}>
                           <Row>
        <Col><strong>Storage Type</strong> </Col>
        <Col>{ele.storageType}</Col>
      </Row>
      <Row>
        <Col><strong>Storage Bin</strong> </Col>
        <Col>{ele.storageBin}</Col>
      </Row>
      <Row>
        <Col><strong>Plant</strong> </Col>
        <Col>{ele.plant}</Col>
      </Row>
                           </span>
                    )

    console.log(data)

    return(
        <>

{ data.length>1 && (
<>
<div className={style.line} style={{marginBottom:'10px'}}></div>
        <ScrollMenu className={style.scroll}>
        <div className={style.row} style={{marginTop:'0'}}>
        {palletItemRow1}
        </div>
</ScrollMenu>
</>
)
}


{ data.length>43 && (
<>
<div className={style.line}></div>
<ScrollMenu>
        <div className={style.row}>
    {palletItemRow2}
    </div>
    </ScrollMenu>
  </>
)
}


{ data.length>87 && (
<>
    <div className={style.line}></div>
    <ScrollMenu>
    <div className={style.row}>
        {palletItemRow3}
        </div>
        </ScrollMenu>
        </>
)}


{ data.length>131 && (
<>
        <div className={style.line}></div>
        <ScrollMenu>
        <div className={style.row}>
        {palletItemRow4}
        </div>
        </ScrollMenu>
  </>
)
}

        <div className={style.line}></div>

{ data.length>175 && (
<>
<ScrollMenu>
<div className={style.row}>
{palletItemRow5}
</div>
</ScrollMenu>
<div className={style.line}></div>
</>
)
}


       { data.length>219 && (
<>
        <ScrollMenu>
        <div className={style.row}>
        {palletItemRow6}
        </div>
        </ScrollMenu>
        <div className={style.line}></div>
        </>
        )
}



        </>
    )
}

export default PalletData;

