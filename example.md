
#### Using 'amend'
Pushing
- `git add .`
- `git commit --amend --no-edit`
	- better to use `git commit -a --amend -C HEAD`
		- -a adds (so we can forego `git add .`)
		- -C HEAD copies metadata from the specified commit (HEAD)
			- --no-edit takes the same message from the default commit (also HEAD), but not metadata like timestamp or tags
- `git push -f`
	- better to use `git push --force-with-lease`
Pulling
- `git fetch`
- `git reset --hard origin/branchname`
	- But this is dangerous, so you can alternatively use
	- `git pull --rebase`

Aliases for amending:
- `git amend` is equivalent to:
	- ~~`git add .`~~
	- ~~`git commit --amend --no-edit`~~
	- `git commit -a --amend -C HEAD`

###### WARNINGS:
- `git reset --hard origin/master` will throw away all staged/unstaged changes and rest your local head to origin/master
- It's a bad idea to rewrite git history after it's been pushed. Here's a beautiful writeup on [amending a commit after it has been pushed](https://stackoverflow.com/questions/70051009/amending-a-commit-after-it-has-been-pushed)
	- Summarized some of these ideas below.

###### Summary / Explanation of `git commit --amend`, what happens when you force push, and why you should use `git push --force-with-lease`
--amend basically "amends" a commit by throwing away the last commit, and replacing it with a new and improved one. technically you're just creating a new commit and having your branch switch its pointer from the old commit to the new one (telling it to lose the old one in the process).

So you had commits A<-B<-C, "amended" C, and now you have A<-B<-D. Though, technically, C still exists. It's just a Citizen of No Country, a floating pointer in the digital cosmos of your machine. C points to B, but nothing points to C, so C is basically in the irretrievable ether. In fact the only reason D isn't in the same boat is bc your branch (which itself is literally just a pointer) WAS pointing at C, left C in the dust to point at D instead. Telling C to suck a dick.

`git push -f` tells a remote to throw away all their local changes and commits, and take exactly what you're giving them. dont sweat the details, I know what's best. no idc what you have there, just do what you're told.
- Usually, you use a force push because a remote repo will resist a regular update to rewritten history.
- With a regular push, you'll go "Hey, you should throw away whatever you have and use A<-B<-D instead"
- And they'll be like "Hell no dawg I got C here. Do you even care about C? I'd have to throw this away, but it could be important."
- And of course, no, you don't care about C. You literally just threw C away yourself because it's garbage and D is better in every way. but the remote doesn't know that. they just think you're trying to be a dick-tator and make everyone use A<-B<-D
- Then you get impatient and go "Well I wasn't asking, homes" and throw that big-dick "-f" flag onto the push, and make them comply.

`--force-with-lease` is nicer, safer. It only overwrites the remote branch **if your local copy is aware of all of the commits on the remote branch.** Along with the request to throw out all previous commits in favor of this history, it also sends a hash of *exactly what it is that you are throwing away*, so they have an opportunity to question your command. 
- Instead of "Hey, you should throw away whatever you have and use A<-B<-D instead"
- You say "Hey, you should throw away C and use A<-B<-D instead"
- And they'll be like "oh word so D is replacing C? yeah I can get behind that"
So instead of blindly accepting your version of things, it compares what you threw away, and what it has. If it's all good in the hood it'll just accept your push. But it can also raise an objection if it needs to.
- It can then go, "well I know you told me to throw away my commits, but you only had commits A,B, and C. Then you got rid of C to use D instead. But *I* have A, B, C, X, and Y. Should I really get rid of this good progress I made?"
- And then you're like, "oh shit, I didn't realize you had that extra stuff that I didn't have. I can't believe I almost made you throw that out. That was close lol"
And then everyone's super glad you used `git push --force-with-lease` instead of that head-assery you were trying before with that `-f` bs


