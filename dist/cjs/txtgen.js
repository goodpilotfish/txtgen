// txtgen@3.0.4, by @ndaidong - built with esbuild at 2022-08-20T15:11:38.588Z - published under MIT license
var u=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var L=Object.prototype.hasOwnProperty;var R=(e,t)=>{for(var n in t)u(e,n,{get:t[n],enumerable:!0})},W=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of P(t))!L.call(e,o)&&o!==n&&u(e,o,{get:()=>t[o],enumerable:!(r=$(t,o))||r.enumerable});return e};var C=e=>W(u({},"__esModule",{value:!0}),e);var I={};R(I,{addAdjectives:()=>v,addNouns:()=>b,addTemplates:()=>y,article:()=>H,getAdjectives:()=>z,getNouns:()=>j,getTemplates:()=>A,paragraph:()=>_,sentence:()=>M,setAdjectives:()=>x,setNouns:()=>w,setRandom:()=>h,setTemplates:()=>k});module.exports=C(I);var a=["alligator","ant","bear","bee","bird","camel","cat","cheetah","chicken","chimpanzee","cow","crocodile","deer","dog","dolphin","duck","eagle","elephant","fish","fly","fox","frog","giraffe","goat","goldfish","hamster","hippopotamus","horse","kangaroo","kitten","lion","lobster","monkey","octopus","owl","panda","pig","puppy","rabbit","rat","scorpion","seal","shark","sheep","snail","snake","spider","squirrel","tiger","turtle","wolf","zebra","apple","apricot","banana","blackberry","blueberry","cherry","cranberry","currant","fig","grape","grapefruit","grapes","kiwi","kumquat","lemon","lime","melon","nectarine","orange","peach","pear","persimmon","pineapple","plum","pomegranate","prune","raspberry","strawberry","tangerine","watermelon"],i=["adaptable","adventurous","affable","affectionate","agreeable","alert","alluring","ambitious","ambitious","amiable","amicable","amused","amusing","boundless","brave","brave","bright","bright","broad-minded","calm","calm","capable","careful","charming","charming","cheerful","coherent","comfortable","communicative","compassionate","confident","conscientious","considerate","convivial","cooperative","courageous","courageous","courteous","creative","credible","cultured","dashing","dazzling","debonair","decisive","decisive","decorous","delightful","detailed","determined","determined","diligent","diligent","diplomatic","discreet","discreet","dynamic","dynamic","eager","easygoing","efficient","elated","eminent","emotional","enchanting","encouraging","endurable","energetic","energetic","entertaining","enthusiastic","enthusiastic","excellent","excited","exclusive","exuberant","exuberant","fabulous","fair","fair-minded","faithful","faithful","fantastic","fearless","fearless","fine","forceful","frank","frank","friendly","friendly","funny","funny","generous","generous","gentle","gentle","glorious","good","good","gregarious","happy","hard-working","harmonious","helpful","helpful","hilarious","honest","honorable","humorous","imaginative","impartial","impartial","independent","industrious","instinctive","intellectual","intelligent","intuitive","inventive","jolly","joyous","kind","kind","kind-hearted","knowledgeable","level","likeable","lively","lovely","loving","loving","loyal","lucky","mature","modern","modest","neat","nice","nice","obedient","optimistic","painstaking","passionate","patient","peaceful","perfect","persistent","philosophical","pioneering","placid","placid","plausible","pleasant","plucky","plucky","polite","powerful","practical","pro-active","productive","protective","proud","punctual","quick-witted","quiet","quiet","rational","receptive","reflective","reliable","relieved","reserved","resolute","resourceful","responsible","rhetorical","righteous","romantic","romantic","sedate","seemly","selective","self-assured","self-confident","self-disciplined","sensible","sensitive","sensitive","shrewd","shy","silly","sincere","sincere","skillful","smiling","sociable","splendid","steadfast","stimulating","straightforward","successful","succinct","sympathetic","talented","thoughtful","thoughtful","thrifty","tidy","tough","tough","trustworthy","unassuming","unbiased","understanding","unusual","upbeat","versatile","vigorous","vivacious","warm","warmhearted","willing","willing","wise","witty","witty","wonderful"],m=["a","e","i","o","u","y"],l=["however, {{nouns}} have begun to rent {{nouns}} over the past few months, specifically for {{nouns}} associated with their {{nouns}}"],f=["to be more specific, ","in recent years, ","however, ","by the way","of course, ","some assert that ","if this was somewhat unclear, ","unfortunately, that is wrong; on the contrary, ","it's very tricky, if not impossible, ","this could be, or perhaps ","this is not to discredit the idea that ","we know that ","it's an undeniable fact, really; ","framed in a different way, ","what we don't know for sure is whether or not ","as far as we can estimate, ","as far as he is concerned, ","the zeitgeist contends that ","though we assume the latter, ","far from the truth, ","extending this logic, ","nowhere is it disputed that ","in modern times ","in ancient times ","recent controversy aside, ","washing and polishing the car,","having been a gymnast, ","after a long day at school and work, ","waking to the buzz of the alarm clock, ","draped neatly on a hanger, ","shouting with happiness, "],p=(e=[],t=[])=>[...new Set([...e,...t])],b=(e=[])=>(a=p(a,e),a.length),v=(e=[])=>(i=p(i,e),i.length),y=(e=[])=>(l=p(l,e),l.length),w=(e=[])=>(a=[...new Set([...e])],a.length),x=(e=[])=>(i=[...new Set([...e])],i.length),k=(e=[])=>(l=[...new Set([...e])],l.length),j=()=>[...a],z=()=>[...i],A=()=>[...l];var N,h=e=>{N=e};h(Math.random);var d=()=>N(),c=(e,t)=>{let n=e,r=t-e+1;return Math.floor(d()*r)+n},s=e=>{let t;for(;!t;)t=e[c(0,e.length-1)];return t},S=()=>{let e=".......!?!?;...".split("");return s(e)},F=e=>e.endsWith("s")?e:(e.match(/(ss|ish|ch|x|us)$/)?e+="e":e.endsWith("y")&&!m.includes(e.charAt(e.length-2))&&(e=e.slice(0,e.length-1),e+="ie"),e+"s"),T=e=>{let t="a";return e.match(/^(a|e|heir|herb|hour|i|o)/)&&(t="an"),`${t} ${e}`},q={noun:()=>s(a),a_noun:()=>T(s(a)),nouns:()=>F(s(a)),adjective:()=>s(i),an_adjective:()=>T(s(i))};var U=["noun","a_noun","nouns","adjective","an_adjective"],B=e=>e.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "),D=e=>{let t=e,n=e.match(/\{\{(.+?)\}\}/g);if(n&&n.length)for(let r=0;r<n.length;r++){let o=B(n[r].replace("{{","").replace("}}","")),g;U.includes(o)&&(g=q[o]()),t=t.replace(n[r],g)}return t},E=()=>d()<.33?s(f):"",G=()=>D(s(l));var M=()=>{let t=E()+G();return t=t.charAt(0).toUpperCase()+t.slice(1),t+=S(),t},_=(e=0)=>{e||(e=c(3,10));let t=Math.min(e,15),n=[];for(;n.length<t;){let r=M();n.push(r)}return n.join(" ")},H=(e=0)=>{e||(e=c(3,10));let t=Math.min(e,15),n=[];for(;n.length<t;){let r=_();n.push(r)}return n.join(`

`)};0&&(module.exports={addAdjectives,addNouns,addTemplates,article,getAdjectives,getNouns,getTemplates,paragraph,sentence,setAdjectives,setNouns,setRandom,setTemplates});
