export const SolidCompiler = (svg: string) => {
  const svgWithProps = svg
    .replace(/([{}])/g, '{\'$1\'}')
    .replace(/(?<=<svg.*?)(>)/i, '{...props}>');
  return `export default (props = {}) => ${svgWithProps}`;
};
