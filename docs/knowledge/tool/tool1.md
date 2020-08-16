# git 操作指南
## 创建新仓库以及到正常提交代码
1. 在github网站上点击`new`, 进入项目配置页面。
2. 填写项目名：`Repository name`。
3. 填写项目描述：`Description`。
4. 选择私有还是公开：`Public` 和 `Private`。
5. 点击`Create repository` 完成创建
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200815233509931.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY1MzMyOQ==,size_16,color_FFFFFF,t_70#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020081523495564.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY1MzMyOQ==,size_16,color_FFFFFF,t_70#pic_center)
6. 复制这个链接
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200815235146769.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY1MzMyOQ==,size_16,color_FFFFFF,t_70#pic_center)
7. `git clone https://github.com/wenbintian/test.git` 此时会生成一个包含`.git`文件夹的项目
```bash
D:\test>git clone https://github.com/wenbintian/test.git
```
8. 新增`README.md`文件
```bash
D:\test\test>echo '# test' >> README.md
```
9. 此时就可以正常的提交了
```bash
D:\test\test>git add .

D:\test\test>git commit -m '第一次提交'
[master (root-commit) 33c940a] '第一次提交'
 1 file changed, 1 insertion(+)
 create mode 100644 README.md

D:\test\test>git push -u origin master
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 238 bytes | 238.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/wenbintian/test.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

## 工作流
你的本地仓库由`git`维护的三颗“树”组成。第一个是你的**工作目录**，它持有实际文件；第二个是**缓存区（Stage）**,它像个缓存区域，临时保存你的改动；最后是**HEAD**，指向你的最后一次提交后的结果。
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020081611024432.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY1MzMyOQ==,size_16,color_FFFFFF,t_70#pic_center)

## stash 命令
### 使用场景
- 当准备提交代码时发现有一个文件的改动是多余的，想直接还原的又担心之后想要查看这些改动的代码，想保存它又不想增加一个多余的提交，此时就可以使用`stash`缓存起来。
- 当开发一个需求开发一半的时候，来了个紧急bug，正常情况可以切换分支去修改和调试代码
### 操作列表
```bash
PS D:\project\git\test-project> git stash help
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
PS D:\project\git\test-project> git stash list
stash@{0}: On master: Uncommitted changes before Update at 2019/9/30 14:27
stash@{1}: On master: Uncommitted changes before Update at 2019/9/23 9:39
stash@{2}: On master: Uncommitted changes before Update at 2019/8/15 18:00
```
### git stash show
  显示存储条目中记录的更改，作为隐藏内容和提交首次创建存储条目时的提交之间的差异（注意只是列出具体哪些文件的差异，具体代码的差异是没有列出来的）
  **git stash show 'stash@{0}'** 可以查看某一条的差异，注意 stash@{0} 需要单引号
  如：

```bash
  PS D:\project\git\test-project> git stash show 'stash@{0}'
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
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200815144423910.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDY1MzMyOQ==,size_16,color_FFFFFF,t_70#pic_center)

### git checkout -b 新分支名称
创建新的分支

### git checkout 分支名称
切换到某个分支

### git branch -d 分支名称
删除某个分支 (注意不要删除当前所在的分支，比如当前是处在 test1 分支，然后去删 test1 分支，这样是不会成功的)

### git branch -a
显示所有的分支（若没看到所有的分支，则先执行`git fetch`一下）

### git branch
显示当前的分支

## commit 命令

### git add .
表示添加新增的文件

### git commit -m '提交说明'
表示提交修改的文件

### git reflog
查看提交的记录
```bash
D:\test\test>git reflog
a806361 (HEAD -> master, origin/master) HEAD@{0}: commit: '<E7><E4><A4>'
33c940a HEAD@{1}: commit (initial): '<AC><AC>'
```

### git reset --hard
回退到上一个版本

### git reset --hard 版本的commit ID
回退到某一个版本（版本commit ID通过 `git reflog` 命令查看，开头的那个ID就是了）

#### 参考
[git 使用建议指南](https://www.bootcss.com/p/git-guide/)
[Git - Book](https://git-scm.com/book/zh/v2)
[git-stash用法小结](https://www.cnblogs.com/tocy/p/git-stash-reference.html)