/**
二叉树总结
1.第n层的节点数最多为2n个节点

2.n层二叉树最多有20+...+2n=2n+1-1个节点

3.第一个非叶子节点：length/2

4.一个节点的孩子节点：2n、2n+1
-中序遍历
取跟节点为目标节点，开始遍历
1.左孩子入栈 -> 直至左孩子为空的节点
2.节点出栈 -> 访问该节点
3.以右孩子为目标节点，再依次执行1、2、3
注：中间值为根节点， 

-前序遍历

取跟节点为目标节点，开始遍历
1.访问目标节点
2.左孩子入栈 -> 直至左孩子为空的节点
3.节点出栈，以右孩子为目标节点，再依次执行1、2、3
注： 首值为根节点

-后序遍历
取跟节点为目标节点，开始遍历
1.左孩子入栈 -> 直至左孩子为空的节点
2.栈顶节点的右节点为空或右节点被访问过 -> 节点出栈并访问他，将节点标记为已访问
3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行1、2、3
注： 最后一个节点为跟节点，第二部分为左子树的值比跟节点都小，第三部分为右子树的值比跟节点都大。


*/