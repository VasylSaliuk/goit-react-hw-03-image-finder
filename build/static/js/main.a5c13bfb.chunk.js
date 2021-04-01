(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={loader:"Loader_loader__1aXfH"}},13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2OeOe",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1GybA"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1S9Pc",Modal:"Modal_Modal__13DDv"}},25:function(e,t,a){e.exports={title:"PageTitle_title__3mzPP"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2xemF"}},28:function(e,t,a){e.exports={Button:"Button_Button__6RWDZ"}},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),c=a.n(o),l=a(15),i=a(4),s=a(5),u=a(7),m=a(6),h=a(10),d=(a(33),a(24)),g=a.n(d);function b(e){var t=e.query,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r;return g.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(n,"&key=19999371-811acb2fbb8c6314c2455af9d&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}var j=a(25),p=a.n(j),f=a(1),v=function(e){var t=e.title;return Object(f.jsx)("h1",{className:p.a.title,children:t})};v.defaultProps={title:""};var y=v,O=a(26),S=a.n(O),_=(a(73),a(12)),I=a.n(_),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:I.a.loader,children:Object(f.jsx)(S.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80,className:I.a.loader})})}}]),a}(n.a.Component),w=a(9),k=a.n(w),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={value:""},e.handleInputChange=function(t){var a=t.currentTarget.value;e.setState({value:a})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.value.trim()?(e.props.onSubmit(e.state.value),e.setState({value:""})):h.b.error("You entered an empty request")},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.value;return Object(f.jsx)("header",{className:k.a.Searchbar,children:Object(f.jsxs)("form",{className:k.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(f.jsx)("button",{type:"submit",className:k.a["SearchForm-button"],children:Object(f.jsx)("span",{className:k.a["SearchForm-button-label"],children:"Search"})}),Object(f.jsx)("input",{className:k.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleInputChange})]})})}}]),a}(r.Component),L=a(27),F=a.n(L),M=a(13),N=a.n(M),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={largeImageURL:e.props.largeImageURL},e.handleChange=function(){e.props.onClick(e.state.largeImageURL)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:N.a.ImageGalleryItem,onClick:this.handleChange,children:Object(f.jsx)("img",{src:this.props.webformatURL,alt:this.props.id,className:N.a.ImageGalleryItemImage})})}}]),a}(r.Component);function P(e){var t=e.images,a=e.onClick;return Object(f.jsx)("ul",{className:F.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.largeImageURL;return Object(f.jsx)("li",{children:Object(f.jsx)(G,{webformatURL:r,largeImageURL:n,onClick:a})},t)}))})}var U=a(28),q=a.n(U),R=function(e){var t=e.onLoadMore;return Object(f.jsx)("button",{className:q.a.Button,type:"button",onClick:t,children:"Load more"})},B=a(14),D=a.n(B),E=document.querySelector("#modal-root"),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:D.a.Overlay,onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:D.a.Modal,children:Object(f.jsx)("img",{src:this.props.url,alt:"Gallery item"})})}),E)}}]),a}(r.Component),H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],query:"",currentPage:1,isLoading:!1,error:null,largeImage:null,showModal:!1},e.submitHandler=function(t){e.setState({images:[],query:t,currentPage:1,error:null,showModal:!1})},e.getImages=function(){var t=e.state,a=t.currentPage,r=t.query,n=(t.error,{query:r,currentPage:a});e.setState({isLoading:!0}),b(n).then((function(t){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),currentPage:e.currentPage+1}})),1!==a&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.setLargeImage=function(t){e.setState({largeImage:t}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.getImages()}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.images,r=e.isLoading,n=e.error,o=e.largeImage;return Object(f.jsxs)(f.Fragment,{children:[n&&Object(f.jsx)("h1",{children:"Something went wrong"}),Object(f.jsx)(y,{title:"React. HomeWork-3.2. Image Finder"}),Object(f.jsx)(C,{onSubmit:this.submitHandler}),Object(f.jsx)(P,{images:a,onClick:this.setLargeImage}),r&&Object(f.jsx)(x,{}),a.length>=12&&!r&&Object(f.jsx)(R,{onLoadMore:this.getImages}),t&&Object(f.jsx)(A,{onClose:this.toggleModal,url:o}),Object(f.jsx)(h.a,{autoClose:3e3})]})}}]),a}(r.Component);a(74),a(75);c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(H,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__PuIu6",SearchForm:"Searchbar_SearchForm__MErNl","SearchForm-button":"Searchbar_SearchForm-button__1Bkna","SearchForm-button-label":"Searchbar_SearchForm-button-label___kSxZ","SearchForm-input":"Searchbar_SearchForm-input__1xcpU"}}},[[76,1,2]]]);
//# sourceMappingURL=main.a5c13bfb.chunk.js.map