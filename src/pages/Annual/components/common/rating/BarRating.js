
import React from 'react';
import {StarSVG} from './StarRating';

export function BarRating(props) {
  let {
    ratingArray,
    singleBarWidth,
    singleBarHeight,
    margin,
  } = props;

  // rem 所以减三个
  // const starWidth = `${Number(singleBarHeight.substring(0,singleBarHeight.length-3))+ 0.1}rem`
  const starWidth = singleBarHeight

  const Bar = (props) => (
      <RatingBar width={singleBarWidth} height={singleBarHeight}
        bgColor={"#ffac2d"}
        ratingScore={props.score}
        style={{marginLeft: ".4rem"}}
        ></RatingBar>
  )

  return (
    <div style={{textAlign: "right", }}>
      {
        ratingArray.map((rating, index )=> {
          let level = index + 1;
          let starArray = []
          for (let i = 1; i <= level; i++) {
            starArray.push(<StarSVG width={starWidth} height={starWidth} key={'star'+ i + 'in' + index}></StarSVG>)
          }
          return (
            <div style={{fontSize: 0, margin: margin}} key={'bar' + index}>
              <div style={{display: "inline-block", height: singleBarHeight}}>{[...starArray]}</div>
              <Bar score={rating} ></Bar>
            </div>
          )
        }).reverse()
      }
    </div>
  )
}

function RatingBar(props) {
  const {
    width,
    height,
    bgColor,
    // marginBottom,
    ratingScore,
    style
  } = props;
  const innerWidth = `${ratingScore * 100}%`
  return (
    <div style={{
      ...style, 
      display: "inline-block",
      width: width,
      height: height,
      backgroundColor: "hsla(0,0%,100%,.1)",
      // marginBottom: marginBottom
      }}>
      <div style={{height:"100%", width: innerWidth, background: bgColor }}>

      </div>
    </div>
  )
}