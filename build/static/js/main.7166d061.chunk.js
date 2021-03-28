(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={loader:"Loader_loader__2J3xf"}},13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2oZMj",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2V4HM"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2yZjO",Modal:"Modal_Modal__2VGvM"}},25:function(e,t,a){e.exports={title:"PageTitle_title__alKbo"}},27:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3sc0l"}},28:function(e,t,a){e.exports={Button:"Button_Button__2QFIM"}},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),c=a.n(o),l=a(15),i=a(4),s=a(5),u=a(7),m=a(6),h=a(10),d=(a(33),a(24)),g=a.n(d);function b(e){var t=e.query,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r;return g.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(n,"&key=19999371-811acb2fbb8c6314c2455af9d&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}var j=a(25),p=a.n(j),f=a(1),y=function(e){var t=e.title;return Object(f.jsx)("h1",{className:p.a.title,children:t})};y.defaultProps={title:""};var v=y,O=a(26),_=a.n(O),I=(a(73),a(12)),S=a.n(I),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:S.a.loader,children:Object(f.jsx)(_.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80,className:S.a.loader})})}}]),a}(n.a.Component),w=a(9),k=a.n(w),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={value:""},e.handleInputChange=function(t){var a=t.currentTarget.value;e.setState({value:a})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.value.trim()?(e.props.onSubmit(e.state.value),e.setState({value:""})):h.b.error("You entered an empty request")},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.value;return Object(f.jsx)("header",{className:k.a.Searchbar,children:Object(f.jsxs)("form",{className:k.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(f.jsx)("button",{type:"submit",className:k.a["SearchForm-button"],children:Object(f.jsx)("span",{className:k.a["SearchForm-button-label"],children:"Search"})}),Object(f.jsx)("input",{className:k.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleInputChange})]})})}}]),a}(r.Component),M=a(27),F=a.n(M),L=a(13),G=a.n(L),N=function(e){var t=e.id,a=e.src,r=e.alt,n=e.largeImageURL,o=e.onClick;return Object(f.jsx)("li",{className:G.a.ImageGalleryItem,children:Object(f.jsx)("img",{onClick:o,src:a,alt:r,className:G.a.ImageGalleryItemImage,"data-source":n})},t)};function q(e){var t=e.images,a=e.onClick;return Object(f.jsx)("ul",{className:F.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.largeImageURL,o=e.tags;return Object(f.jsx)(N,{src:r,alt:o,largeImageURL:n,onClick:function(){return a(n)}},t)}))})}var P=a(28),B=a.n(P),D=function(e){var t=e.onLoadMore;return Object(f.jsx)("button",{className:B.a.Button,type:"button",onClick:t,children:"Load more"})},U=a(14),E=a.n(U),H=document.querySelector("#modal-root"),R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:E.a.Overlay,onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:E.a.Modal,children:Object(f.jsx)("img",{src:this.props.url,alt:"Gallery item"})})}),H)}}]),a}(r.Component),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],query:"",currentPage:1,isLoading:!1,error:null,largeImage:null,showModal:!1},e.submitHandler=function(t){e.setState({images:[],query:t,currentPage:1,error:null,showModal:!1})},e.getImages=function(){var t=e.state,a=t.currentPage,r=t.query,n=(t.error,{query:r,currentPage:a});e.setState({isLoading:!0}),b(n).then((function(t){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),currentPage:e.currentPage+1}})),1!==a&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.setLargeImage=function(t){e.setState({largeImage:t}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.getImages()}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.images,r=e.isLoading,n=e.error,o=e.largeImage,c=a.length>0&&!r;return Object(f.jsxs)(f.Fragment,{children:[n&&Object(f.jsx)("h1",{children:"Something went wrong"}),Object(f.jsx)(v,{title:"React. HomeWork-3.2. Image Finder"}),Object(f.jsx)(C,{onSubmit:this.submitHandler}),Object(f.jsx)(q,{images:a,onClick:this.setLargeImage}),r&&Object(f.jsx)(x,{}),c&&Object(f.jsx)(D,{onLoadMore:this.getImages}),t&&Object(f.jsx)(R,{onClose:this.toggleModal,url:o}),Object(f.jsx)(h.a,{autoClose:3e3})]})}}]),a}(r.Component);a(74),a(75);c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__20B5-",SearchForm:"Searchbar_SearchForm__3xPb5","SearchForm-button":"Searchbar_SearchForm-button__Jgx7G","SearchForm-button-label":"Searchbar_SearchForm-button-label__1l0_q","SearchForm-input":"Searchbar_SearchForm-input__2z8Iq"}}},[[76,1,2]]]);
//# sourceMappingURL=main.7166d061.chunk.js.map