---
title: Mysql篇 -- 基础篇
cover: https://pan.zealsay.com/zealsay/cover/5.jpg
date: 2021-09-01
tags:
  - mysql
categories:
  - Mysql
  - 技术笔记
sticky: 2
---

## 1. MySQL 数据库

### 1. Linux+Apache+MySQL+PHP，目前最流行的开源服务器端技术之一。

### 2. 服务器端：存储、维护数据

### 3. D:\xampp\mysql\bin\mysqld.exe 启动文件

### 4. 客户端：负责连接数据库,对数据端执行操作

D:\xampp\mysql\bin\mysql.exe 客户端文件

### 5. MySQL 中文乱码产生的原因

1.  mysql 默认使用 Latin-1.

### 6. 解决 MySQL 乱码问题

1.  脚本文件格式为 utf8.
2.  客户端连接服务器编码为 utf8.
3.  服务器创建数据库使用的存储编码为 utf8.

### 7. 列类型

#### 1. 创建表的时候，指定的类所能存储的数据类型。

1. 数值型

   1. **tinyint** 微整型 占 1 个字节，范围-128~127

      TB GB MB KB byte bit

      1byte=8bit

   2. **smallint** 小整型 占 2 个字节，范围-32768~32767
   3. **int** 整型 占 4 个字节，范围-2147483648~2147483647
   4. **bigint** 大整型 占 8 个字节
   5. **float** 单精度浮点型 4 个字节 值越大精度越低
   6. **double** 双精度浮点型 8 个字节
   7. **decimal(M,D)** 定点小数，小数点不会改变,M 表示有效位数，D 代表小数点后的有效位数
   8. **boolean/bool** 布尔型，用于存储只有两个值的数据，分别是 true 和 false,在使用的时候会自动转换成 tinyint 型。
   9. 数值型引号可以省略，别的都需要加引号。

2. 日期时间型
   1. **date** 日期型 '2021-09-02'
   2. **time** 时间型 '08:22:10'
   3. **datetime** 日期时间型 '2021-09-02 08:22:10'
3. 字符串型
   1. **varchar(M)** 变长字符串 几乎不会产生空间浪费，数据操作速度较慢 max(M)=65535
   2. **char(M)** 定长字符串 可能产生空间浪费，数据操作速度相对快，存储定长的数据。max(M)=255
   3. **text(M)** 大型变长字符串 max(M)=2G

### 4. **列约束**

1. MySQL 可以对要插入的数据进行验证，只有符合条件的才允许插入

   create table 表名(
   属性 列类型 列约束
   );

   1. 主键约束
      1. **primary key**
      2. 声明了主键约束的列上不允许出现重复的值，也不允许为 **null**。
      3. 会自动进行排序
      4. **一个表只能有一个主键约束**
      5. null🈳，表示一个暂时无法确定的值，`null是关键字，使用的时候不能加引号`
   2. 非空约束

      1. **not null**
      2. 声明了非空约束的列上禁止插入 null

   3. **唯一约束**
      1. **unique**
      2. 声明了唯一约束的列不可以出现重复的值，可以重复定义
   4. **默认值约束**
      1. 可以使用的 default 关键字设置默认值
         1. 通过 default 关键字调用
            ```sql
            insert into laptop values(70,defult);
            ```
         2. 没有出现的列自动生成默认值
            ```sql
            insert into(fid) laptop values(70);
            ```
   5. **检查约束**
      1. **check**
      2. 也称为自定义约束，用户可以根据实际需求添加约束条件
      3. mysql 不支持检查约束，会严重的影响插入速度，后期可以使用 js 来实现
      ```sql
      create table student(
      	id int check(id>0 and id<100)
      );
      ```
   6. **外键约束**
      1. 外键列出现的值**必须**在另一个表中的主键列上**出现**过的值
         ```sql
         FOREIGN **KEY(familyid)** REFERENCES **family(fid)**
         ```
      2. **外键列和主键列的列类型要保持一致。**

### 2. **自增列**

1. **auto_increment**
2. 自动增长，声明自增列，只需要赋值为 null，就会获取最大值然后加 1 插入。
3. 注意事项：必须是添加在主键形式的整数列，允许手动添加

### 3. 简单查询

1.  查询特定的列
    1. **select 列名 1,列名 2... from 表名;**
2.  查询所有的列
    1. **select \* from 表名;**
3.  给列起别名
    1. select **eid as 编号,ename as 姓名** from emp;
    2. **as** 可以省略的
4.  显示不同的记录
    1. select distinct sex from emp;
5.  查询是执行计算
    1. select 1+2+3+4;
6.  查询的结构排序
    1. select \* from dept order by did asc;升序排列 ascendant
    2. select \* from dept order by did desc;降序排列 descendant
    3. **默认是按升序排列**
7.  条件查询
    1. select \* from emp **where** eid=5;
    2. 运算符 < > ≤ ≥ ≠
    3. select \* from emp where deptid is null;
    4. select \* from emp where deptid is not null;
    5. `select * from emp where deptid!='null';这个为什么可以`
    6. **and/&& 并且；都满足**
    7. **or / || 或者；满足其中之一即可**
    8. **deptid in(值 1,值 2);**
    9. **deptid not in(值 1,值 2);**
8.  模糊条件查询
    1. **select \* from emp where ename like '%a%';**
       1. **%** 匹配任意个字符
       2. **\_** 匹配任意 1 个字符

### 8. 使用客户端连接服务器端

1.  `mysql.exe -h127.0.0.1 -P3306 -uroot -p`

    `-h host` 要连接的服务器端域名或者 IP 地址 127.0.0.1、localhost

    `-P post` 端口号 3306

    `-u user` 用户名 root 管理员

    `-p password` 密码

2.  `quit;` 退出连接

## 2.常用的管理的命令

```sql
`show databases;` # 显示当前数据库

show create database 数据库名; #显示当前数据库详情

create database 数据库名; #创建数据库

drop databse (if exites) 数据库名; #删除数据库

use database; # 进入数据库

show tables; # 显示当前数据库下所有表

 create table 表名(
   值1 类型,
   值2 类型,
   值3 类型
  )charset utf8; #创建数据并设置编码类型

describe | desc 表名; # 查询表内的行数据

insert into 表名 values(值1,值2,值3); #在表中插入数据

update 表名 set 修改的数据 where 条件; #修改表中数据

delete from 表名 where 条件; #删除表中数据
```
