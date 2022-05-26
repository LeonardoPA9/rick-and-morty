import React, { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CharacterList from "../components/Character/CharacterList";
import FilterByType from "./Home/FilterByType";
import { CharacterContext } from "../context/CharacterContext";
import EpisodeFilter from "./Episodes/EpisodeFilter";
import { routerRoutes } from "../utils/Routes";

const Layout = () => {
  const {
    character,
    fetchCharacters,
    fetchFilteredCharacters,
    handleCharacterSearch,
    characterSearch,
    resetFilters,
  } = useContext(CharacterContext);
  const { pathname } = useLocation();

  return (
    <div className="container py-5">
      {pathname === routerRoutes.HOME && (
        <>
          <div className="row justify-center">
            <form
              onSubmit={(evt) => {
                evt.preventDefault();
                fetchFilteredCharacters("name", characterSearch);
              }}
              className="input-group mb-4"
            >
              <input
                type="text"
                onChange={handleCharacterSearch}
                value={characterSearch}
                className="form-control"
                placeholder="Search by character"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <button
                disabled={!characterSearch.length}
                type="submit"
                className="btn btn-success"
              >
                Search
              </button>
            </form>
          </div>
          <div className="row mb-5 justify-content-center row-cols-2">
            <button
              disabled={!character?.info?.prev}
              onClick={() => fetchCharacters(character?.info.prev)}
              className="mx-2 col-2 btn btn-success"
            >
              Previous
            </button>
            <button
              disabled={!character?.info?.next}
              onClick={() => fetchCharacters(character?.info.next)}
              className="mx-2 col-2 btn btn-success"
            >
              Next
            </button>
          </div>
        </>
      )}
      <div className="row">
        <div className="col-3">
          <div className="col-12 mb-4">
            <div className="text-center fw-bold fs-4 mb-2">Filter</div>
            <div
              style={{ cursor: "pointer" }}
              className="text-center fs-6 text-success text-decoration-underline"
              onClick={resetFilters}
            >
              Clear Filters
            </div>
          </div>
          <Routes>
            <Route path={routerRoutes.HOME} element={<FilterByType />} />
            <Route path={routerRoutes.EPISODES} element={<EpisodeFilter />} />
          </Routes>
        </div>
        <div className="col-9">
          <CharacterList />
        </div>
      </div>
    </div>
  );
};

export default Layout;
