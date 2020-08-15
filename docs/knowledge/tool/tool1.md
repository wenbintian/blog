# git 操作指南
## 创建新仓库

## stash 命令
### 操作列表
```bash
PS D:\project\git\zoehis-web-client> git stash help
usage: git stash list [<options>]
   or: git stash show [<stash>]
   or: git stash drop [-q|--quiet] [<stash>]
   or: git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
   or: git stash branch <branchname> [<stash>]
   or: git stash [save [--patch] [-k|--[no-]keep-index] [-q|--quiet]
                       [-u|--include-untracked] [-a|--all] [<message>]]
   or: git stash clear
```
### git stash list
列出您当前拥有的存储条目
如：
```bash
PS D:\project\git\zoehis-web-client> git stash list
stash@{0}: On master: Uncommitted changes before Update at 2019/9/30 14:27
stash@{1}: On master: Uncommitted changes before Update at 2019/9/23 9:39
stash@{2}: On master: Uncommitted changes before Update at 2019/8/15 18:00
```
### git stash show
  显示存储条目中记录的更改，作为隐藏内容和提交首次创建存储条目时的提交之间的差异（注意只是列出具体哪些文件的差异，具体代码的差异是没有列出来的）
  **git stash show 'stash@{0}'** 可以查看某一条的差异，注意 stash@{0} 需要单引号
  如：

```bash
  PS D:\project\git\zoehis-web-client> git stash show 'stash@{0}'
 app/common/api-class.js                            |     4 +-
 app/config/config.js                               |     4 +
 app/his5/menuFrame/index.js                        |     6 +-
 app/test/demo-zoeRoute.js                          |     8 +-
```
### git stash show 'stash@{0}' -p
可以查看某一条里代码的差异.

```bash
D:\project\git\zoehis-web-portal> git stash show 'stash@{0}' -p
diff --git a/public/vue/js/portal/common/common.js b/public/vue/js/portal/common/common.js
index 4579074..e83ab24 100644
index 4579074..e83ab24 100644
--- a/public/vue/js/portal/common/common.js
+++ b/public/vue/js/portal/common/common.js
@@ -50,6 +50,10 @@ export default {
             this.peopleWebsocket && this.peopleWebsocket.send(JSON.stringify(obj));//回复说 在线
           }
         }else {
+          if(socketData.clearLoginFlag){
+            this.tackUnlock(true);
+            return;
+          }
           if(!socketData.validCheck){//validCheck为false说明该用户被作废了
```

### git stash drop `<stash>`
 从存储条目列表中删除单个存储条目。如果没有`<stash>`给出，它将删除最新的一个

```bash
 PS D:\project\git\zoehis-web-hip> git stash drop 'stash@{4}'
Dropped stash@{4} (a7c965742435d921d2f43bb553dce83738115089)
```

### git stash push -m '描述说明'
**注意旧版本不支持 push,则需要用 git stash save '描述说明' 代替**
将您的本地修改保存到新的存储条目中，并将它们回滚到HEAD（在工作树和索引中）

### git stash pop `<stash>`
从存储列表中删除一个单独的存储状态并将其应用于当前工作树状态的顶部,若 `<stash>`没传，值是将 stash里最新的一个 即 stash@{0}释放出来到本地代码上。

### git stash clear
删除所有的存储条目

## 分支相关操作
- 分支是用来将特性开发绝缘开来的。在你创建仓库的时候，`master`是“默认的”。在其他分支上进行开发，完成后再将它们合并到主分支上。

### git checkout -b 新分支名称
创建新的分支

### git checkout 分支名称
切换到某个分支

### git checkout -d 分支名称
删除某个分支 (注意不要删除当前的分支)

### git branch -a
显示所有的分支（若没看到所有的分支，则先执行`git fetch`一下）

### git branch
显示当前的分支

