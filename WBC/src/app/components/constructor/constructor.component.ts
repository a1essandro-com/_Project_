import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.css']
})
export class ConstructorComponent implements OnInit {
  width: number = 520;
  height: number = 300;
  margin_top: number = 85;
  background: string="";
  user_background:string;
  div_style: string="width:"+this.width+"px; height:"+this.height+"px; margin-top:"+this.margin_top+"px; background-image: url("+this.background+");";
  text1: string;
  text2: string;
  text3: string;
  text1_style: string;
  text2_style: string;
  text3_style: string;
  font_size1: number = 25;
  font_size2: number = 25;
  font_size3: number = 25;
  font_color: string;

  constructor() { }

  ngOnInit(): void {
  }

  usual_size(){
    this.width=520;
    this.height=300;
    this.margin_top=85;
    this.div_style="width:"+this.width+"px; height:"+this.height+"px; margin-top:"+this.margin_top+"px; background-image: url("+this.background+");";
  }
  vertical_size(){
    this.width=350;
    this.height=480;
    this.margin_top=15;
    this.div_style="width:"+this.width+"px; height:"+this.height+"px; margin-top:"+this.margin_top+"px; background-image: url("+this.background+");";
  }
  square_size(){
    this.width=400;
    this.height=400;
    this.margin_top=65;
    this.div_style="width:"+this.width+"px; height:"+this.height+"px; margin-top:"+this.margin_top+"px; background-image: url("+this.background+");";
  }
  elongate_size(){
    this.width=600;
    this.height=300;
    this.margin_top=85;
    this.div_style="width:"+this.width+"px; height:"+this.height+"px; margin-top:"+this.margin_top+"px; background-image: url("+this.background+");";
  }
  big_size(){
    this.width=650;
    this.height=375;
    this.margin_top=48;
    this.div_style="width:"+this.width+"px; height:"+this.height+"px; margin-top:"+this.margin_top+"px; background-image: url("+this.background+");";
  }
  set_background(){
    this.background=this.user_background;
    this.div_style="width:"+this.width+"px; height:"+this.height+"px; margin-top:"+this.margin_top+"px; background-image: url("+this.background+");";
  }
  delete_background(){
    this.user_background = "";
    this.background=this.user_background;
    this.div_style="width:"+this.width+"px; height:"+this.height+"px; margin-top:"+this.margin_top+"px; background-image: url("+this.background+");";
  }
  set_text_argument(){
    if(this.font_size1>=10 && this.font_size1<=40){
      this.text1_style="font-size:"+this.font_size1+"px; color:"+this.font_color+";"}
    if(this.font_size2>=10 && this.font_size2<=40){
      this.text2_style="font-size:"+this.font_size2+"px; color:"+this.font_color+";"}
    if(this.font_size3>=10 && this.font_size3<=40){
      this.text3_style="font-size:"+this.font_size3+"px; color:"+this.font_color+";"}
  }
  white(){
    this.font_color="white";
  }
  black(){
    this.font_color="black";
  }
  blue(){
    this.font_color="blue";
  }
  purple(){
    this.font_color="purple";
  }
  yellow(){
    this.font_color="yellow";
  }
  orange(){
    this.font_color="orange";
  }
  red(){
    this.font_color="red";
  }
  green(){
    this.font_color="greenyellow";
  }
  dark_green(){
    this.font_color="green";
  }
  brown(){
    this.font_color="brown";
  }
}
