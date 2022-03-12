import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalize',
  templateUrl: './personalize.component.html',
  styleUrls: ['./personalize.component.css']
})
export class PersonalizeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  questions = [
    {idOne:"flush-heading0", number:"0", controls:"0", idSecond:"flush-collapse0", title:"How much does delivery cost?", answ:"There is no minimum amount required to avail of free shipping on your order. We offer free shipping on all orders made through our website."},
    {idOne:"flush-heading1", number:"1", controls:"1", idSecond:"flush-collapse1", title:"What payment methods do you offer?", answ:"We offer all modes of online payment such as credit card, debit card, net banking, phone pe,  G pay, UPI, Paytm via Razorpay."},
    {idOne:"flush-heading2", number:"2", controls:"2", idSecond:"flush-collapse2", title:"Do I have gift wrap options?", answ:"Yes. you have the option to get your order gift wrapped if you are buying it for someone else. There is a 50 rupees extra charge for gift wrapping."},
    {idOne:"flush-heading3", number:"3", controls:"3", idSecond:"flush-collapse3", title:"What kind of canvas do you use?", answ:"We source from the best producers to provide you with premium quality prints. Our partners are one of the best in the country."},
    {idOne:"flush-heading4", number:"4", controls:"4", idSecond:"flush-collapse4", title:"What finish does your acrylic product have?", answ:"Acrylic photo prints come with a gloss finish that looks exactly like q glass. However, acrylic is scratch-resistant and does not break like glass."},
    {idOne:"flush-heading5", number:"5", controls:"5", idSecond:"flush-collapse5", title:"What file formats can I upload?", answ:"You can upload your images in jpeg, jpg, or png formats. Make sure they are of high resolution as the prints might get blurred with low-quality pictures."},
    {idOne:"flush-heading6", number:"6", controls:"6", idSecond:"flush-collapse6", title:"How can I customize my phone cover?", answ:"You can select custom font, text, background, and color for your phone covers. Our preview tool will show you how your finished product will look like and we will deliver exactly what you see on the screen."},
    {idOne:"flush-heading7", number:"7", controls:"7", idSecond:"flush-collapse7", title:"Yes. we have shockproof covers available on our site for all the latest models of smartphones."},
  ]

}
