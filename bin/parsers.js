import yaml from 'js-yaml';

const parsers = (content, extension) => {
  switch (extension) {
    case '.json':
      return JSON.parse(content);
    case '.yml':
      return yaml.load(content);
    default:
      throw new Error(`Current extension ${extension} cannot be read, please use files '.json, .yaml, .txt'`);
  }
};

export default parsers;
