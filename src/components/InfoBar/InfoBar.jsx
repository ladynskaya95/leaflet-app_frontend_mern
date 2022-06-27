import React from 'react'
import "./infoBar.css";
import InfoBlock from "./InfoBlock.jsx"
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slices/posts";

const InfoBar = ({items, newObj, }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const isPostsLoading = posts.status === "loading";

  const [data, setData] = React.useState();
  const { id } = useParams();
  const [isPostLoading, setIsPostLoading] = React.useState(true);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setIsPostLoading(false);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);


  // if (isPostLoading) {
  //   return posts.items.map((data, id) => (
  //     <InfoBlock
  //       id={data.id}
  //       name={data.title}
  //       imageUrl={`http://localhost:4444${data.imageUrl}`}
  //       street="dddd"
  //       price="4444444"

  //     />
  //   ));
  // }

  return (
    <div className="infowrap">
      <>
        {items
          // .filter((key) =>
          //   L.latLngBounds([
          //     [mapBoundaries._southWest.lat, mapBoundaries._southWest.lng],
          //     [mapBoundaries._northEast.lat, mapBoundaries._northEast.lng],
          //   ]).contains([
          //     markers[key].coordinates.latitude,
          //     markers[key].coordinates.longitude,
          //   ])
          // )
          .sort((a, b) =>
            a.id === newObj.id ? -1 : b.id === newObj.id ? 1 : 0
          )
          .map((obj) => (
            <InfoBlock
              key={obj.id}
              name={obj.name}
              id={obj.id}
              price={obj.price}
              imageUrl={obj.imageUrl}
              street={obj.address.street}
            />
          ))}
      </>
    </div>
  );
};

export default InfoBar;
