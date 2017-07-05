/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : soeasy

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-07-05 15:05:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `proname` varchar(255) CHARACTER SET utf8 NOT NULL,
  `proprice` int(11) NOT NULL,
  `qrcode` varchar(255) CHARACTER SET utf8 NOT NULL,
  `specification` varchar(255) CHARACTER SET utf8 NOT NULL,
  `storage` int(255) NOT NULL DEFAULT '99',
  `qty` int(11) NOT NULL DEFAULT '1',
  `category` varchar(255) CHARACTER SET utf8 NOT NULL,
  `suppliername` varchar(255) CHARACTER SET utf8 NOT NULL,
  `sale` int(255) NOT NULL DEFAULT '0',
  `pd` varchar(255) NOT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('5', '冰红茶', '5', '100020', '瓶', '99', '1', '食物', '得力', '0', '20170704');
INSERT INTO `goods` VALUES ('6', '怡宝', '3', '6901285991271', '瓶', '99', '1', '食物', '华润怡宝饮料', '0', '20170704');
INSERT INTO `goods` VALUES ('7', '雀巢咖啡', '10', '6917878030623', '瓶', '99', '1', '食物', '厦门银鹭集团', '0', '20170704');
INSERT INTO `goods` VALUES ('9', '营养快线', '5', '6902083893842', '瓶', '99', '1', '食物', '哇哈哈集团', '0', '20170704');
INSERT INTO `goods` VALUES ('10', '可口可乐', '3', '6928804010114', '瓶', '99', '1', '食物', '可口可乐公司', '0', '20170704');
INSERT INTO `goods` VALUES ('11', '黄金叶', '20', '6901028162869', '包', '99', '1', '食物', '中烟工业有限公司', '0', '20170704');
INSERT INTO `goods` VALUES ('12', '维家纸巾', '10', '6937923601042', '包', '99', '1', '日用品', '天勤纸业有限公司', '0', '20170704');
INSERT INTO `goods` VALUES ('13', '维他奶', '7', '4891028164401', '瓶', '99', '1', '日用品', '维他光明食品', '0', '20170704');
INSERT INTO `goods` VALUES ('14', '伊利奶', '10', '6907992100272', '瓶', '99', '1', '日用品', '内蒙古伊利实业', '0', '20170704');
INSERT INTO `goods` VALUES ('15', '水杯', '10', '6923173683518', '瓶', '99', '1', '日用品', '辉煌塑料', '0', '20170704');
INSERT INTO `goods` VALUES ('16', '经典双喜', '10', '6901028000642', '包', '99', '1', '日用品', '中烟工业', '0', '20170704');
INSERT INTO `goods` VALUES ('17', '炫迈', '10', '6954432710706', '瓶', '99', '1', '日用品', '亿滋食品', '0', '20170704');
INSERT INTO `goods` VALUES ('18', '软抄笔记本', '10', '6922711079066', '本', '99', '1', '日用品', '广博集团', '0', '20170704');
INSERT INTO `goods` VALUES ('19', '软抄办公笔记本', '10', '6920523300118', '本', '99', '1', '日用品', '嘉顺达纸制品', '0', '20170704');
INSERT INTO `goods` VALUES ('21', 'AB胶水', '10', '6933569402371', '瓶', '99', '1', '日用品', '粘霸粘剂', '0', '20170704');
INSERT INTO `goods` VALUES ('22', '白沙烟', '10', '6901028191098', '包', '99', '1', '日用品', '湖南中烟工业', '0', '20170704');
INSERT INTO `goods` VALUES ('23', '维达纸巾', '10', '6901236341582', '包', '99', '1', '日用品', '维达纸业', '0', '20170704');

-- ----------------------------
-- Table structure for `member`
-- ----------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `indexid` int(50) NOT NULL AUTO_INCREMENT,
  `phone` varchar(11) CHARACTER SET utf8 NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 NOT NULL,
  `level` varchar(50) CHARACTER SET utf8 NOT NULL,
  `discount` varchar(50) CHARACTER SET utf8 NOT NULL,
  `integral` int(50) NOT NULL,
  `balance` int(50) NOT NULL,
  `date` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=MyISAM AUTO_INCREMENT=54 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of member
-- ----------------------------
INSERT INTO `member` VALUES ('53', '13888888888', '啊啊啊啊啊', '银牌会员', '98', '123', '123', '2017-06-27 03:30');
INSERT INTO `member` VALUES ('52', '15611111111', 'fsk', '钻石会员', '90', '200', '200', '2017-06-28 02:15');
INSERT INTO `member` VALUES ('51', '13222222222', 'matexia', '钻石会员', '80', '1000', '1000', '2017-07-04 03:15');

-- ----------------------------
-- Table structure for `storagemanage`
-- ----------------------------
DROP TABLE IF EXISTS `storagemanage`;
CREATE TABLE `storagemanage` (
  `indexid` int(200) NOT NULL AUTO_INCREMENT,
  `tiaoma` varchar(200) CHARACTER SET utf8 NOT NULL,
  `productname` varchar(200) CHARACTER SET utf8 NOT NULL,
  `huohao` varchar(200) CHARACTER SET utf8 NOT NULL,
  `danwei` varchar(200) CHARACTER SET utf8 NOT NULL,
  `guige` varchar(200) CHARACTER SET utf8 NOT NULL,
  `category` varchar(200) CHARACTER SET utf8 NOT NULL,
  `suppliers` varchar(200) CHARACTER SET utf8 NOT NULL,
  `jprice` varchar(200) CHARACTER SET utf8 NOT NULL,
  `lprice` varchar(200) NOT NULL,
  `hprice` varchar(200) NOT NULL,
  `pprice` varchar(200) NOT NULL,
  `yishou` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `kucun` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `kcxia` varchar(200) CHARACTER SET utf8 NOT NULL,
  `ticheng` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `jifen` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `shijian` datetime DEFAULT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of storagemanage
-- ----------------------------
INSERT INTO `storagemanage` VALUES ('1', '123456', '怡宝', '20170703', '瓶', '500ml', '食品', '北京钱枫', '10', '100', '80', '3', '444', '2', '0', '1', '10', '2017-07-03 00:00:00');
INSERT INTO `storagemanage` VALUES ('2', '23456', '水柠檬', '20170704', '瓶', '100ml', '食品', '农夫山泉', '5', '100', '90', '42', '555', '23', '0', '1', '12', '2017-07-04 00:00:00');
INSERT INTO `storagemanage` VALUES ('3', '134256', '打印机', '20170705', '台', '30*30*10', '日化', '广州后卫', '100', '100', '90', '513', '666', '543', '0', '1', '12', '2017-04-03 00:00:00');
INSERT INTO `storagemanage` VALUES ('4', '5555550', '电风扇', '20170706', '台', '90*90', '家电', '广州前灯', '200', '100', '80', '24', '0', '234', '0', '1', '123', '2017-07-06 00:00:00');
INSERT INTO `storagemanage` VALUES ('5', '566666', '办公桌', '20170707', '个', '100*100', '家居', '北京沃尔玛', '1000', '1000', '70', '23', '66', '643', '0', '1', '13', '2017-04-29 00:00:00');
INSERT INTO `storagemanage` VALUES ('14', '1928399234', 'iphone100', '66666666', '台', '1000*1000*1000', '手机', '小米科技公司', '9999', '9999', '9998', '9999', '0', '19999', '1999', '9000', '0000', '2017-07-04 00:00:00');
INSERT INTO `storagemanage` VALUES ('15', '29482039', '小米', '9764934', '台', '388*333*90329', '手机', '小米科技', '1341', '2000', '2000', '23423', '0', '234', '45', '234', '234', '2017-07-04 00:00:00');

-- ----------------------------
-- Table structure for `tcategory`
-- ----------------------------
DROP TABLE IF EXISTS `tcategory`;
CREATE TABLE `tcategory` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `sort` varchar(20) NOT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tcategory
-- ----------------------------
INSERT INTO `tcategory` VALUES ('1', '食品类');
INSERT INTO `tcategory` VALUES ('2', '日用品类');
INSERT INTO `tcategory` VALUES ('3', '饮料类');
INSERT INTO `tcategory` VALUES ('4', '冷冻食品类');
INSERT INTO `tcategory` VALUES ('5', '熟食类');
INSERT INTO `tcategory` VALUES ('6', '乳制品类');
INSERT INTO `tcategory` VALUES ('7', '烟酒类');
INSERT INTO `tcategory` VALUES ('8', '调料类');
INSERT INTO `tcategory` VALUES ('9', '糕点类');
INSERT INTO `tcategory` VALUES ('10', '蔬菜类');
INSERT INTO `tcategory` VALUES ('15', '家电类');

-- ----------------------------
-- Table structure for `tsupplier`
-- ----------------------------
DROP TABLE IF EXISTS `tsupplier`;
CREATE TABLE `tsupplier` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `supplierName` varchar(50) NOT NULL,
  `contactName` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `date` varchar(50) NOT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tsupplier
-- ----------------------------
INSERT INTO `tsupplier` VALUES ('1', '农夫山泉', '张三', '男', '13824591153', '13824591153@qq.com', '广东省广州市', '2017-7-4 11:17');
INSERT INTO `tsupplier` VALUES ('2', '海天', '李四', '男', '13811111111', '13811111111@qq.com', '广东省广州市荔湾区', '2017-7-4 11:18');
INSERT INTO `tsupplier` VALUES ('3', '娃哈哈', '炅炅', '男', '13823232323', '13823232323@qq.com', '河南省长沙市', '2017-7-4 11:20');
INSERT INTO `tsupplier` VALUES ('4', '怡宝', '李明', '男', '13824242424', '13824242424@qq.com', '广东省东莞市', '2017-7-4 16:11');
INSERT INTO `tsupplier` VALUES ('5', '乐事', '王红', '女', '13855555555', '13855555555@qq.com', '广东省深圳市', '2017-7-4 16:12');
INSERT INTO `tsupplier` VALUES ('9', '可口可乐', '黄峰', '男', '13122222222', '13122222222@qq.com', '广东省广州市', '2017-7-4 16:13');
INSERT INTO `tsupplier` VALUES ('10', '美年达', '李达', '女', '13844444444', '13844444444@qq.com', '广东省珠海市', '2017-7-4 16:20');

-- ----------------------------
-- Table structure for `tunit`
-- ----------------------------
DROP TABLE IF EXISTS `tunit`;
CREATE TABLE `tunit` (
  `indexid` int(11) NOT NULL AUTO_INCREMENT,
  `unit` varchar(20) NOT NULL,
  PRIMARY KEY (`indexid`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tunit
-- ----------------------------
INSERT INTO `tunit` VALUES ('1', '箱');
INSERT INTO `tunit` VALUES ('2', '瓶');
INSERT INTO `tunit` VALUES ('3', '罐');
INSERT INTO `tunit` VALUES ('4', '盒');
INSERT INTO `tunit` VALUES ('5', '袋');
INSERT INTO `tunit` VALUES ('6', '包');
INSERT INTO `tunit` VALUES ('7', '斤');
INSERT INTO `tunit` VALUES ('8', '公斤');
INSERT INTO `tunit` VALUES ('9', '克');
INSERT INTO `tunit` VALUES ('10', '千克');
INSERT INTO `tunit` VALUES ('11', '卷');
INSERT INTO `tunit` VALUES ('12', '两');
INSERT INTO `tunit` VALUES ('16', '个');
