import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import gql from 'graphql-tag';
import Layout from '../components/Layout';
import { withApollo } from '../apollo/client';
import DataGrid from '../components/DataGrid';

const FeedQuery = gql`
  query FeedQuery {
    feed {
      id
      title
      content
      published
      author {
        id
        name
      }
    }
  }
`;

const Post = ({ post }) => (
  <Link href="/p/[id]" as={`/p/${post.id}`}>
    <a>
      <h2>{post.title}</h2>
      <small>By {post.author.name}</small>
      <p>{post.content}</p>
      <style jsx>{`
        a {
          text-decoration: none;
          color: inherit;
          padding: 2rem;
          display: block;
        }
      `}</style>
    </a>
  </Link>
);

const DEFAULT_FIELDS = [
  {
    fieldName: 'id',
    valueType: 'text',
  },
];

const DEFAULT_COLUMNS = [
  {
    name: 'idColumn',
    fieldName: 'id',
    header: {
      title: 'id',
    },
  },
];

/**
 * Blog
 */
const Blog = () => {
  const { loading, error, data } = useQuery(FeedQuery);
  const [rows, setRows] = useState(data?.feed);
  const [fields, setFields] = useState(DEFAULT_FIELDS);
  const [columns, setColumns] = useState(DEFAULT_COLUMNS);
  const [addField, setAddField] = useState(null);

  /** addField 값이 변경 되면 참조하는 곳에서 호출됨 */
  const addFieldColumnCallback = useCallback(() => {
    return addField;
  }, [addField]);

  /**
   * - setFields와 setColumns로 필드, 컬럼 추가
   * - 이 경우 데이터가 지워지므로 다시 넣어 주어햐 한다.
   */
  const onSetFieldsClick = () => {
    const newField = {
      fieldName: 'title',
      valueType: 'text',
    };
    setFields(Array.from([...fields, newField]));

    const newColumn = {
      name: 'titleColumn',
      fieldName: 'title',
      header: {
        title: 'title',
      },
    };
    setColumns(Array.from([...columns, newColumn]));
  };

  /**
   * - setFields 아니고 addField 로 추가 이 경우 데이터가 reset 되지 않는다.
   * - TODO: 두번 누르면 같은 이름 필드 추가로 에러 발생.
   */
  const onAddFieldClick = () => {
    setAddField({ fieldName: 'published', valueType: 'boolean' });
  };

  /**
   * - rows 값이 변경되어 그리드 컴포넌트의 rows 변경 이펙트가 호출된다.
   */
  const onSetRowsClick = () => {
    setRows(Array.from([...rows]));
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Layout>
      <div className="page">
        <h1>My Blog</h1>
        <main>
          <nav className="toolbar">
            <button onClick={onSetFieldsClick}>setFields, setColumns</button>
            <button onClick={onAddFieldClick}>addFields, addColumns</button>
            <button onClick={onSetRowsClick}>데이터 다시 넣어주기</button>
          </nav>
          <DataGrid
            id="realgrid2"
            fields={fields}
            columns={columns}
            rows={rows}
            addFieldColumn={addFieldColumnCallback}
          />
        </main>
      </div>
      <style jsx>{`
        button {
          border: 1px solid black;
          padding: 0.5rem 1rem;
          border-radius: 3px;
          margin-right: 8px;
        }

        .toolbar {
          margin-top: 24px;
          margin-bottom: 10px;
        }

        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default withApollo(Blog);
