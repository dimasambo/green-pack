import React, {useEffect} from 'react';
import {StyledNews} from "./StyledNews";
import {Newsline} from "../../components/Newsline/Newsline";
import {useDispatch, useSelector} from "react-redux";
import {requestAllPosts} from "../../Redux/posts/posts-slice";
import {State} from "../../Redux/redux-store";
import {IPost} from "../../types/post";

export const News: React.FC = ({  }) => {
    const {allPosts} = useSelector((state: State) => state.post)
    let newsArr: IPost[] = [...allPosts]
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(requestAllPosts())
    }, [])

    return (
        <StyledNews>
            <Newsline news={newsArr.reverse()} />
        </StyledNews>
    );
};
