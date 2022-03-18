import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { MotiCard } from "./moticard"

export const Motivational = () => {

  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="">
      <div className="d-flex flex-row p-3 m-3" style={{ width: "100%", overflow: "auto" }}>
      <MotiCard data = {store.quote}/> 
      </div>
    </div>
  );
};











Motivational.propTypes = {
  match: PropTypes.object
};