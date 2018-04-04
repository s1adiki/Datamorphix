import React from 'react';
import {v4} from 'node-uuid';
import "../styles/dataArea.css"


export const DisplayTable = ({data})=>(
    <table>
        <thead>
            <tr>
                <th>
                    User Name
                </th>
                <th>
                    Profile Pic
                </th>
                <th>
                    User Profile Url
                </th>
                <th>
                    User Level
                </th>
                <th>
                    Rating
                </th>
                <th>
                    Foodie Color
                </th>
                <th>
                    Rating Color
                </th>
                <th>
                    Rating Text
                </th>
                <th>
                    Rating Time Friendly
                </th>
                <th>
                    Restaurant Id
                </th>
                <th>
                    Retrieved Time
                </th>
                <th>
                    Review Id
                </th>
                <th>
                    Review Text
                </th>
                <th>
                    Time Stamp
                </th>
                <th>
                    User Foodie Level
                </th>
                <th>
                    User Zomato Handle
                </th>
                <th>
                    Class Name
                </th>
                <th>
                    Likes
                </th>
                <th>
                    Confidence
                </th>
                <th>
                    Score
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map(reviews => (
                <Display key={v4()} review = {reviews}/>
                ))
            }
        </tbody>
    </table>
);

const Display = ({review})=>(
    <tr>
        <td>{review.user_name}</td>
        <td><img className="tableImg" src = {review.profile_image} alt = ""/></td>
        <td><a href={review.profile_url}>Link</a></td>
        <td>{review.user_level_num}</td>
        <td>{review.rating}</td>
        <td>{review.foodie_color}</td>
        <td>{review.rating_color}</td>
        <td>{review.rating_text}</td>
        <td>{review.rating_time_friendly}</td>
        <td>{review.restaurant_id}</td>
        <td>{review.retrieved_time}</td>
        <td>{review.review_id}</td>
        <td>{review.review_text}</td>
        <td>{review.time_stamp}</td>
        <td>{review.user_foodie_level}</td>
        <td>{review.user_zomatohandle}</td>
        <td>{review.class_name}</td>
        <td>{review.likes}</td>
        <td>{review.confidence}</td>
        <td>{review.score}</td>
    </tr>

);
