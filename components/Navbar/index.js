import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <div>
    <ul className="nav">
      <li><Link href="/"><a>首页</a></Link></li>
      <li><Link href="/about"><a>关于</a></Link></li>
      <li><Link href="/user/info"><a>用户信息</a></Link></li>
      <li><Link href="/user/setinfo"><a>设置信息</a></Link></li>
    </ul>
    <style jsx global>{``}</style>
    <style jsx>{`
      .nav {
        list-style: none;
      }
      .nav li {
        display: inline-block;
        margin-right: 20px;
      }
      .nav li a {
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Navbar;
