(this["webpackJsonpray-another-world"]=this["webpackJsonpray-another-world"]||[]).push([[0],{22:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return x}));var a=n(12),i=n(0),r=n.n(i),o=n(3),c=n(10),s=n(25),l=n.p+"static/media/ray.439be73d.jpg",u=n.p+"static/media/ray.8fca898b.webp",h=n(26),d=(n(38),n.p+"static/media/let_us_trace.2c70aa1b.gif"),f=n(1);function m(e){var t=Object(i.useState)(!1),n=Object(a.a)(t,2),r=n[0],o=n[1],s=Object(i.useState)(!1),m=Object(a.a)(s,2),A=m[0],v=m[1];Object(i.useEffect)((function(){try{var e=window.dataLayer.push("www");console.log(e),v(!0!==e)}catch(t){console.log(t)}Object(h.detectAnyAdblocker)().then((function(e){o(e)}))}),[]);var b=null,j=null;return r&&(b=Object(f.jsxs)(x,{children:[Object(f.jsx)("h2",{style:{color:"red"},children:"\u4ec0\u9ebc\uff0c\u4f60\u5c45\u7136\u5728\u4f7f\u7528 AdBlock\u2049\ufe0f"}),Object(f.jsx)("div",{style:{color:"yellow",fontWeight:600},children:"\u96d6\u7136\u9019\u88e1\u6c92\u6709\u5ee3\u544a\uff0c\u4f46\u662f\u6211\u5c31\u662f\u8981\u8aaa:P"})]})),A&&(j=Object(f.jsxs)(x,{children:[Object(f.jsx)("h2",{style:{color:"red"},children:"\u4ec0\u9ebc\uff0c\u4f60\u5c45\u7136\u7981\u6b62 GTag \u8ffd\u8e64\u2049\ufe0f"}),Object(f.jsxs)("div",{style:{color:"yellow",fontWeight:600},children:["\u807d\u8a71\uff0c\u8b93\u6211\u5eb7\u5eb7\uff01",Object(f.jsx)("img",{style:{maxHeight:"10rem",maxWidth:"50%",marginTop:".5rem",animation:"videoAni 1s linear 0s infinite forwards",display:"block"},src:d})]})]})),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"section header "+(e.expand?"expand":""),children:[Object(f.jsx)("div",{className:"avatar_wrapper",children:Object(f.jsx)("div",{className:"avatar",children:Object(f.jsxs)("picture",{children:[Object(f.jsx)("source",{srcSet:u}),Object(f.jsx)("img",{src:l})]})})}),Object(f.jsxs)("div",{className:"title_box",children:[Object(f.jsx)("h1",{className:"text_texture crystal",children:"Ray's Another World"}),Object(f.jsx)("h3",{className:"text_texture crystal",children:"I'm A Programmer, I Have No Life."})]}),Object(f.jsx)("nav",{className:"nav",children:Object(f.jsxs)("ul",{className:"text_texture crystal",children:[Object(f.jsx)("li",{children:Object(f.jsx)(c.b,{to:"/",children:"\u9996\u9801"})}),Object(f.jsx)("li",{children:Object(f.jsx)(c.b,{to:"/about",children:"\u95dc\u65bc"})}),Object(f.jsx)("li",{children:Object(f.jsx)(c.b,{to:"/portfolio",children:"\u4f5c\u54c1\u53e2"})})]})})]}),b,j]})}var A=n(49),v=n(48),b=(n(24),r.a.lazy((function(){return n.e(6).then(n.bind(null,56))}))),j=r.a.lazy((function(){return n.e(4).then(n.bind(null,57))})),g=r.a.lazy((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,58))})),E=function(e){var t=Object(o.f)();return Object(f.jsx)(A.a,{className:"ani_wrap",children:Object(f.jsx)(v.a,{classNames:"fade",timeout:2500,children:Object(f.jsx)(i.Suspense,{fallback:null,children:Object(f.jsxs)(o.c,{location:t,children:[Object(f.jsx)(o.a,{path:"/about",children:Object(f.jsx)(b,{setExpandHeader:e.setExpandHeader})}),Object(f.jsx)(o.a,{path:"/portfolio",children:Object(f.jsx)(g,{setExpandHeader:e.setExpandHeader,setFallingSnow:e.setFallingSnow})}),Object(f.jsx)(o.a,{path:"/",children:Object(f.jsx)(j,{setExpandHeader:e.setExpandHeader})})]})})},t.key)})},p=function(e){var t=Object(i.useState)(!0),n=Object(a.a)(t,2),r=n[0],o=n[1],l=Object(i.useState)(!1),u=Object(a.a)(l,2),h=u[0],d=u[1];return Object(f.jsxs)("div",{className:"outer_wrapper",children:[r&&Object(f.jsx)(s.a,{}),Object(f.jsxs)(c.a,{children:[Object(f.jsx)(m,{expand:h}),Object(f.jsx)(E,{setFallingSnow:o,setExpandHeader:d})]}),Object(f.jsx)("div",{style:{height:"2rem"}})]})},x=function(e){return Object(f.jsx)("div",{className:"section",children:e.children})}},23:function(e,t,n){"use strict";n(24);var a=n(22),i=n(1);t.a=function(e){return Object(i.jsx)(a.a,{})}},24:function(e,t,n){},25:function(e,t,n){"use strict";var a=n(15),i=n(16),r=n(29),o=n(28),c=n(0),s=n.n(c),l=(n(36),n(17)),u=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(a.a)(this,e),i=Object.assign({antialias:!1,depthTest:!1,mousemove:!1,autosize:!0,msaa:0,vertex:"\n          precision highp float;\n  \n          attribute vec4 a_position;\n          attribute vec4 a_color;\n  \n          uniform float u_time;\n          uniform vec2 u_resolution;\n          uniform vec2 u_mousemove;\n          uniform mat4 u_projection;\n  \n          varying vec4 v_color;\n  \n          void main() {\n  \n            gl_Position = u_projection * a_position;\n            gl_PointSize = (10.0 / gl_Position.w) * 100.0;\n  \n            v_color = a_color;\n  \n          }",fragment:"\n          precision highp float;\n  \n          uniform sampler2D u_texture;\n          uniform int u_hasTexture;\n  \n          varying vec4 v_color;\n  \n          void main() {\n  \n            if ( u_hasTexture == 1 ) {\n  \n              gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);\n  \n            } else {\n  \n              gl_FragColor = v_color;\n  \n            }\n  \n          }",uniforms:{},buffers:{},camera:{},texture:null,onUpdate:function(){},onResize:function(){}},i);var r=Object.assign({time:{type:"float",value:0},hasTexture:{type:"int",value:0},resolution:{type:"vec2",value:[0,0]},mousemove:{type:"vec2",value:[0,0]},projection:{type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}},i.uniforms),o=Object.assign({position:{size:3,data:[]},color:{size:4,data:[]}},i.buffers),c=Object.assign({fov:60,near:1,far:1e4,aspect:1,z:100,perspective:!0},i.camera),s=document.createElement("canvas"),l=s.getContext("webgl",{antialias:i.antialias});if(!l)return!1;this.count=0,this.gl=l,this.canvas=s,this.camera=c,this.holder=t,this.msaa=i.msaa,this.onUpdate=i.onUpdate,this.onResize=i.onResize,this.data={},t.appendChild(s),this.createProgram(i.vertex,i.fragment),this.createBuffers(o),this.createUniforms(r),this.updateBuffers(),this.updateUniforms(),this.createTexture(i.texture),l.enable(l.BLEND),l.enable(l.CULL_FACE),l.blendFunc(l.SRC_ALPHA,l.ONE),l[i.depthTest?"enable":"disable"](l.DEPTH_TEST),i.autosize&&window.addEventListener("resize",(function(e){return n.resize(e)}),!1),i.mousemove&&window.addEventListener("mousemove",(function(e){return n.mousemove(e)}),!1),this.resize(),this.update=this.update.bind(this),this.time={start:performance.now(),old:performance.now()},this.update()}return Object(i.a)(e,[{key:"mousemove",value:function(e){var t=e.pageX/this.width*2-1,n=e.pageY/this.height*2-1;this.uniforms.mousemove=[t,n]}},{key:"resize",value:function(e){var t=this.holder,n=this.canvas,a=this.gl,i=this.width=t.offsetWidth,r=this.height=t.offsetHeight,o=this.aspect=i/r,c=this.dpi=Math.max(this.msaa?2:1,devicePixelRatio);n.width=i*c,n.height=r*c,n.style.width=i+"px",n.style.height=r+"px",a.viewport(0,0,i*c,r*c),a.clearColor(0,0,0,0),this.uniforms.resolution=[i,r],this.uniforms.projection=this.setProjection(o),this.onResize(i,r,c)}},{key:"setProjection",value:function(e){var t=this.camera;if(t.perspective){t.aspect=e;var n=t.fov*(Math.PI/180),a=Math.tan(.5*Math.PI-.5*n),i=1/(t.near-t.far),r=[a/t.aspect,0,0,0,0,a,0,0,0,0,(t.near+t.far)*i,-1,0,0,t.near*t.far*i*2,0];return r[14]+=t.z,r[15]+=t.z,r}return[2/this.width,0,0,0,0,-2/this.height,0,0,0,0,1,0,-1,1,0,1]}},{key:"createShader",value:function(e,t){var n=this.gl,a=n.createShader(e);if(n.shaderSource(a,t),n.compileShader(a),n.getShaderParameter(a,n.COMPILE_STATUS))return a;console.log(n.getShaderInfoLog(a)),n.deleteShader(a)}},{key:"createProgram",value:function(e,t){var n=this.gl,a=this.createShader(n.VERTEX_SHADER,e),i=this.createShader(n.FRAGMENT_SHADER,t),r=n.createProgram();n.attachShader(r,a),n.attachShader(r,i),n.linkProgram(r),n.getProgramParameter(r,n.LINK_STATUS)?(n.useProgram(r),this.program=r):(console.log(n.getProgramInfoLog(r)),n.deleteProgram(r))}},{key:"createUniforms",value:function(e){var t=this,n=this.gl,a=this.data.uniforms=e,i=this.uniforms={};Object.keys(a).forEach((function(e){a[e].location=n.getUniformLocation(t.program,"u_"+e),Object.defineProperty(i,e,{set:function(n){a[e].value=n,t.setUniform(e,n)},get:function(){return a[e].value}})}))}},{key:"setUniform",value:function(e,t){var n=this.gl,a=this.data.uniforms[e];switch(a.value=t,a.type){case"int":n.uniform1i(a.location,t);break;case"float":n.uniform1f(a.location,t);break;case"vec2":n.uniform2f.apply(n,[a.location].concat(Object(l.a)(t)));break;case"vec3":n.uniform3f.apply(n,[a.location].concat(Object(l.a)(t)));break;case"vec4":n.uniform4f.apply(n,[a.location].concat(Object(l.a)(t)));break;case"mat2":n.uniformMatrix2fv(a.location,!1,t);break;case"mat3":n.uniformMatrix3fv(a.location,!1,t);break;case"mat4":n.uniformMatrix4fv(a.location,!1,t)}}},{key:"updateUniforms",value:function(){var e=this,t=(this.gl,this.data.uniforms);Object.keys(t).forEach((function(n){var a=t[n];e.uniforms[n]=a.value}))}},{key:"createBuffers",value:function(e){var t=this,n=(this.gl,this.data.buffers=e),a=this.buffers={};Object.keys(n).forEach((function(e){var i=n[e];i.buffer=t.createBuffer("a_"+e,i.size),Object.defineProperty(a,e,{set:function(a){n[e].data=a,t.setBuffer(e,a),"position"==e&&(t.count=n.position.data.length/3)},get:function(){return n[e].data}})}))}},{key:"createBuffer",value:function(e,t){var n=this.gl,a=this.program,i=n.getAttribLocation(a,e),r=n.createBuffer();return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(i),n.vertexAttribPointer(i,t,n.FLOAT,!1,0,0),r}},{key:"setBuffer",value:function(e,t){var n=this.gl,a=this.data.buffers;(null!=e||n.bindBuffer(n.ARRAY_BUFFER,null))&&(n.bindBuffer(n.ARRAY_BUFFER,a[e].buffer),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t),n.STATIC_DRAW))}},{key:"updateBuffers",value:function(){this.gl;var e=this.buffers;Object.keys(e).forEach((function(t){return e[t]=e.data})),this.setBuffer(null)}},{key:"createTexture",value:function(e){var t=this.gl,n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),this.texture=n,e&&(this.uniforms.hasTexture=1,this.loadTexture(e))}},{key:"loadTexture",value:function(e){var t=this.gl,n=this.texture,a=new Image;a.onload=function(){t.bindTexture(t.TEXTURE_2D,n),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)},a.src=e}},{key:"update",value:function(){if("undefined"!==typeof InstallTrigger&&1!=window.localStorage.FORCE_FALLING_SNOW)console.log("WebGL has some serious problem on FireFox. Set window.localStorage.FORCE_FALLING_SNOW to true to force enable it.");else{var e=this.gl,t=performance.now(),n=(t-this.time.start)/5e3,a=t-this.time.old;this.time.old=t,this.uniforms.time=n,this.count>0&&(e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.POINTS,0,this.count)),this.onUpdate(a),requestAnimationFrame(this.update)}}}]),e}(),h=n(1);function d(){var e=document.getElementsByClassName("falling_snow_overlay")[0];if(void 0==e)return console.log("holder undefined!"),void setTimeout((function(){d()}),0);e.style.top=0,e.style.opacity=1;var t={current:0,force:.1,target:.1,min:.1,max:.25,easing:.005};new u(e,{depthTest:!1,texture:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTUtMDctMDNUMTg6NTk6MjIrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTAxLTEyVDE1OjE0OjQwKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTAxLTEyVDE1OjE0OjQwKzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmIzMzBlMWI0LTk5ZDctNGU2NS05MGQ2LTNmYjFiYmE2ZTE0MCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjAyNThjNzMxLTQ4ZjQtYTA0MS1hNGFkLTQ4MTA2MTVjY2FlYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjJjY2VkMTUyLTRjNzAtNDFlZC1hMzcyLWRlOWY4NjgyZTcwMSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmNjZWQxNTItNGM3MC00MWVkLWEzNzItZGU5Zjg2ODJlNzAxIiBzdEV2dDp3aGVuPSIyMDE1LTA3LTAzVDE4OjU5OjIyKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjMzMGUxYjQtOTlkNy00ZTY1LTkwZDYtM2ZiMWJiYTZlMTQwIiBzdEV2dDp3aGVuPSIyMDE5LTAxLTEyVDE1OjE0OjQwKzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz50mbqsAAAToElEQVR4nOVbW49dR5X+VlXtc2v3Ne52N6bTTnAc0u02GRJQwEhYQkJ5QhmhPPOUl0iBB/4AP4JfMA95IEIaJEYiQhlesCZMEE1iGxJHIjK21XbSwX1xd5+zd9Va87BrVdfefWwI4xEaUVJpn7PPPnVqfbUu31pVh0QE/8zN/KMn8I9uTl+8+uqrAAARgYgghIBer4dnnnkGAPDFL34RANDr9eiJJ55AVVUgIhhjwMwYDAbY3Nyk8+fPP/DHdnd3ZWtr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",uniforms:{worldSize:{type:"vec3",value:[0,0,0]},gravity:{type:"float",value:100},wind:{type:"float",value:0}},buffers:{size:{size:1,data:[]},rotation:{size:3,data:[]},speed:{size:3,data:[]}},vertex:"\nprecision highp float;\n\nattribute vec4 a_position;\nattribute vec4 a_color;\nattribute vec3 a_rotation;\nattribute vec3 a_speed;\nattribute float a_size;\n\nuniform float u_time;\nuniform vec2 u_mousemove;\nuniform vec2 u_resolution;\nuniform mat4 u_projection;\nuniform vec3 u_worldSize;\nuniform float u_gravity;\nuniform float u_wind;\n\nvarying vec4 v_color;\nvarying float v_rotation;\n\nvoid main() {\n\n  v_color = a_color;\n  v_rotation = a_rotation.x + u_time * a_rotation.y;\n\n  vec3 pos = a_position.xyz;\n\n  pos.x = mod(pos.x + u_time + u_wind * a_speed.x, u_worldSize.x * 2.0) - u_worldSize.x;\n  pos.y = mod(pos.y - u_time * a_speed.y * u_gravity, u_worldSize.y * 2.0) - u_worldSize.y;\n\n  pos.x += sin(u_time * a_speed.z) * a_rotation.z;\n  pos.z += cos(u_time * a_speed.z) * a_rotation.z;\n\n  gl_Position = u_projection * vec4( pos.xyz, a_position.w );\n  gl_PointSize = ( a_size / gl_Position.w ) * 100.0;\n\n}",fragment:"\nprecision highp float;\n\nuniform sampler2D u_texture;\n\nvarying vec4 v_color;\nvarying float v_rotation;\n\nvoid main() {\n\n  vec2 rotated = vec2(\n    cos(v_rotation) * (gl_PointCoord.x - 0.5) + sin(v_rotation) * (gl_PointCoord.y - 0.5) + 0.5,\n    cos(v_rotation) * (gl_PointCoord.y - 0.5) - sin(v_rotation) * (gl_PointCoord.x - 0.5) + 0.5\n  );\n\n  vec4 snowflake = texture2D(u_texture, rotated);\n\n  gl_FragColor = vec4(snowflake.rgb, snowflake.a * v_color.a);\n\n}",onResize:function(e,t,n){var a=[],i=[],r=[],o=[],c=[],s=110,l=e/t*s;Array.from({length:e/t*7e3},(function(e){a.push(-l+Math.random()*l*2,Math.random()*s*2-110,80*Math.random()*2),c.push(1+Math.random(),1+Math.random(),10*Math.random()),o.push(2*Math.random()*Math.PI,20*Math.random(),10*Math.random()),i.push(1,1,1,.1+.2*Math.random()),r.push(5*Math.random()*5*(t*n/1e3))})),this.uniforms.worldSize=[l,s,80],this.buffers.position=a,this.buffers.color=i,this.buffers.rotation=o,this.buffers.size=r,this.buffers.speed=c},onUpdate:function(e){t.force+=(t.target-t.force)*t.easing,t.current+=t.force*(.2*e),this.uniforms.wind=t.current,Math.random()>.995&&(t.target=(t.min+Math.random()*(t.max-t.min))*(Math.random()>.5?-1:1))}})}var f=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){setTimeout((function(){d()}),3e3)}},{key:"render",value:function(e){if("true"==window.localStorage.disableFallingSnow)return null;return Object(h.jsx)("div",{className:"falling_snow_overlay",style:{transition:"ease 8s top, opacity",top:"-50vh",opacity:0}})}}]),n}(s.a.Component);t.a=f},30:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n.n(a),r=n(23),o=n(1);i.a.render(Object(o.jsx)(r.a,{}),document.getElementById("root"))},36:function(e,t,n){},38:function(e,t,n){}},[[30,1,2]]]);
//# sourceMappingURL=main.aa555c34.chunk.js.map