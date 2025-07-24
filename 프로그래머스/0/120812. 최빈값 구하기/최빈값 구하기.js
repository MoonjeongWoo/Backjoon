function solution(a){
  let m=Math.max(...a.map(v=>a.filter(x=>x==v).length));
  let r=a.filter((v,i,s)=>s.filter(x=>x==v).length==m);
  return [...new Set(r)].length==1?[...new Set(r)][0]:-1
}
