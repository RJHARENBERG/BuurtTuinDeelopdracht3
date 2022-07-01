import React, {useContext, useEffect, useState} from 'react';
import style from "./projectSingelPost.module.css"
import {RiDeleteBin2Line} from "react-icons/ri";
import {useHistory, useLocation} from "react-router-dom";
import axios from "axios";
import {FaPencilAlt} from "react-icons/fa";
import {AuthContext} from "../../../../context/AuthContext";

function ProjectSingelPost(props) {

    let searchData = useLocation()
    const [projectId, setProjectId] = useState(searchData.state.projectId)
    const [post, setPost] = useState()
    console.log(projectId)
    let history = useHistory();
    const {user: {username}} = useContext(AuthContext)

    useEffect(() => {
        async function singelPost() {
            try {
                const response = await axios.get(`http://localhost:8080/projects/findProjectById/${projectId}`);
                setPost(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        singelPost();
    }, []);

    const onDelete = data => {
        const token = localStorage.getItem('token');
        console.log(data)
        console.log(token)
        axios
            .delete(
                `http://localhost:8080/projects/deleteProjectById/${data}`,
                {headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}}
            )
            .then(response => {
                history.push("/allProjects")
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.data)
            });
    };

    const onEnroll = data => {
        const token = localStorage.getItem('token');
        console.log(username)
        axios
            .post(
                `http://localhost:8080/enrolls/addEnroll/${data}`,
                {tenderId: username},
                {headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}}
            )
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.data)
            });
    };

    const onDeleteTodo = data => {
        const token = localStorage.getItem('token');
        console.log(data)
        console.log(token)
        axios
            .delete(
                `http://localhost:8080/todos/deleteTodoById/${data}`,
                {headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`}}
            )
            .then(response => {
                // history.push("/allProjects")
                window.location.reload();
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.data)
            });
    };

    if (post) {
        return (
            <div className={style.ProjectSingelPost} key={post.id}>
                <div className={style.ProjectSingelPostWrapper}>
                    <img
                        className={style.ProjectSingelPostImg}
                        src="https://media.istockphoto.com/photos/planting-with-my-friend-picture-id1340726264?b=1&k=20&m=1340726264&s=170667a&w=0&h=BlurOk7yz_TTBXI85xB6UaoxwA9FqCvvehXJ3V1pBis="
                        alt=""
                    />
                    <div className={style.ProjectSingelPostHeader}>
                        <div className={style.ProjectSingelPostInfo}>
                            <span className={style.ProjectSingelPostAuthor}>
                                Locatie: {post.location}
                            </span>
                            <span className={style.ProjectSingelPostDate}>
                                Datum: {post.date}
                            </span>
                        </div>
                        <h1 className={style.ProjectSingelPostTitle}>
                            {post.name}
                        </h1>
                        <div className={style.ProjectSingelPostEdit}>
                            <button className={style.ProjectSingelPostIcon}
                                    onClick={() => onDelete(post.id)}>
                                <RiDeleteBin2Line/>
                            </button>
                            <button className={style.ProjectSingelPostIcon}
                                    onClick={() => onEnroll(post.id)}>
                                <FaPencilAlt/>
                            </button>
                        </div>
                    </div>
                    <div className={style.ProjectSingelPostList}>
                        <div className={style.EnrolledInProject}>
                            <h2>Inschrijvingen</h2>
                            {post.enrolls.map((enrolls) => {
                                return (
                                    <div className={style.EnrolledInProjectItems} key={enrolls.id}>
                                        <h3>{enrolls.tenderId}</h3>
                                    </div>
                                )
                            })}
                        </div>
                        <article className={style.ProjectSingelPostArticle}>
                            {post.description}
                        </article>
                        <div className={style.TodoList}>
                            <h2>Taken</h2>
                            {post.todos.map((todos) => {
                                return (
                                    <div className={style.TodoListItems} key={todos.id}>
                                        <div className={style.TodoListItemTodo}>
                                            <h3>{todos.nameTodo}</h3>
                                            <button
                                                onClick={() => onDeleteTodo(todos.id)}
                                            >
                                                <RiDeleteBin2Line/>
                                            </button>
                                        </div>
                                        <div className={style.TodoListItemsDefinition}>
                                            <h4>{todos.definition}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }
}

export default ProjectSingelPost;