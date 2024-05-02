export function Popular(){
    return(
        <div>
            <div id="trending-main-cont">
                <div id="trend-title-cont">
                    <h3>What's Popular</h3>
                    <div id="container">
                        <input type="checkbox" id="check" />
                        <label for="check" id="button">
                            <div id="toggle-options">
                                <div id="opt">
                                    <div>Movies</div>
                                    <div>TV Shows</div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div class="carousel-container">
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/original/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg" alt="Movie 1"/>
                        <div class="rating">9.8</div> 
                        <div class="card-content">
                            <h3>No Way Up</h3>
                            <p>Mar 27, 2024</p>
                            {/* <div class="movie-name">Movie 1</div>
                            <div class="release-date">Release Date: January 1, 2024</div>
                            <div class="ratings">Rating: 8.5/10</div> */}
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/original/cxevDYdeFkiixRShbObdwAHBZry.jpg" alt="Movie 1"/>
                        <div class="rating">9.8</div> 
                        <div class="card-content">
                            <h3>Rebel Moon — Part</h3>
                            <p>Apr 19, 2024</p>
                            {/* <div class="movie-name">Movie 1</div>
                            <div class="release-date">Release Date: January 1, 2024</div>
                            <div class="ratings">Rating: 8.5/10</div> */}
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/original/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg" alt="Movie 1"/>
                        <div class="rating">9.8</div> 
                        <div class="card-content">
                            <h3>Godzilla x Kong: The</h3>
                            <p>Mar 27, 2024</p>
                            {/* <div class="movie-name">Movie 1</div>
                            <div class="release-date">Release Date: January 1, 2024</div>
                            <div class="ratings">Rating: 8.5/10</div> */}
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg" alt="Movie 1"/>
                        <div class="rating">9.8</div> 
                        <div class="card-content">
                            <h3>No Way Up</h3>
                            <p>Mar 27, 2024</p>
                            {/* <div class="movie-name">Movie 1</div>
                            <div class="release-date">Release Date: January 1, 2024</div>
                            <div class="ratings">Rating: 8.5/10</div> */}
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" alt="Movie 1"/>
                        <div class="rating">9.8</div> 
                        <div class="card-content">
                            <h3>No Way Up</h3>
                            <p>Mar 27, 2024</p>
                            {/* <div class="movie-name">Movie 1</div>
                            <div class="release-date">Release Date: January 1, 2024</div>
                            <div class="ratings">Rating: 8.5/10</div> */}
                        </div>
                    </div>
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/original/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg" alt="Movie 1"/>
                        <div class="rating">9.8</div> 
                        <div class="card-content">
                            <h3>No Way Up</h3>
                            <p>Mar 27, 2024</p>
                            {/* <div class="movie-name">Movie 1</div>
                            <div class="release-date">Release Date: January 1, 2024</div>
                            <div class="ratings">Rating: 8.5/10</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}