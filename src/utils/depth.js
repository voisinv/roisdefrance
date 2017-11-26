const getFamilyDepth = (parent: any = {}): number => {
  let depth = 1;
  
  function test(p: any = {}): number {
    p.children = p.children || [];
    const depths = p.children.filter((child: any = {}) => child.children);
    if (depths.length) {
      depth++;
      return test(depths[0]);
    }
    return depth;
  }
  
  return test(parent);
};


const getSVGHeightFromDepth = (depth: number = 0) => depth * 110;

const getTotalDepth = (): number => {
  return 0;
};

export {
  getFamilyDepth,
  getSVGHeightFromDepth,
  getTotalDepth
}