import React, { useEffect, useState } from 'react';
import { ObjectList } from '../../components/ObjectList/ObjectList';
import classes from './befList.module.scss';
import { RiMap2Fill } from 'react-icons/ri';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../api/axiosBase';

type Befs = {
  groupEndTime: string;
  teamId: number;
  storeId: number;
  storeName: string;
  leaderName: string;
  leaderImgSrc: string[];
  category: string;
  storeImgUrl: string[];
  storeScore: number;
  reviewCount: number;
  deliveryTime: number;
  deliveryTip: number;
  minPrice: number;
  maxMember: number;
  basicAddress: string;
  detailedAddress: string;
  latitude: string;
  longitude: string;
}[];

export const BefList = () => {
  const navigate = useNavigate();
  const [befs, setBefs] = useState<Befs>();

  // useEffect(() => {
  //   axios.get('/data/objectList/befs.json').then(res => setBefs(res.data));
  // }, []);

  useEffect(() => {
    instance
      .get('/teamlist?page=&&size=')
      .then(res => setBefs(res.data.payload));
  }, []);

  return (
    <div className={classes.befList}>
      <ObjectList
        stores={undefined}
        befs={befs}
        likedStore={undefined}
        users={undefined}
      />
      <button className={classes.mapBtn} onClick={() => navigate('/befMap')}>
        <RiMap2Fill />
      </button>
      <div className={classes.plusBtn} onClick={() => navigate('/storeList')}>
        <BsFillPlusCircleFill />
      </div>
    </div>
  );
};

export default BefList;
