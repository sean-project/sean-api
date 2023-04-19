// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as colors from 'colors';
import * as moment from 'moment';

export function configLog({ type, info }) {
  console.log(
    colors.green(`[Conf] ${process.pid}  - `) +
      colors.black(moment().format('MM/DD/YYYY, h:mm:ss A')) +
      colors.green(`     LOG `) +
      colors.bgYellow(`[${type}] `) +
      colors.bgGreen(`${info} `),
  );
}

// 根据id查询返回每一级数据

export function treeFindPath<T>(
  tree: T[],
  func: (item: T) => boolean,
  path: any = [],
): {
  title: string;
  key: string;
  nodeType: number;
}[] {
  if (!tree) {
    return [];
  }
  for (const data of tree) {
    // 假设满足条件,直接放到数组里

    path.push({
      title: data.title,
      key: data.key,
      nodeType: data.nodeType,
    });
    if (func(data)) {
      return path;
    }
    if (data.children) {
      const res = treeFindPath(data.children, func, path);
      if (res.length) {
        return res;
      }
    }
    path.pop();
  }
  return [];
}

export function treeFind<T>(
  tree: T[],
  func: (item: T) => boolean,
): T | undefined {
  for (const data of tree) {
    if (func(data)) return data;
    if (data.children) {
      const res = treeFind(data.children, func);
      if (res) return res;
    }
  }
  return undefined;
}
