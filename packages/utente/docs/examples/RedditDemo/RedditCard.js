import React from "react";
import {
  Card,
  Space,
  Avatar,
  Tag,
  Text,
  Paragraph,
  Button
} from "../../../lib/utente";
import { formatDistance } from "date-fns";
import styles from "./styles.css";

const currentDate = new Date();

const titleStyle = { fontSize: 12 };
const dateStyle = { fontSize: 11, color: "#cfcfcf" };
const footerBtnStyle = {
  height: 32,
  padding: 10,
  fontSize: 12,
  whiteSpace: "nowrap"
};

const ArrowIcon = props => (
  <div className={styles.arrowButton}>
    <i className={`fas fa-arrow-alt-circle-${props.icon}`}></i>
  </div>
);

const RedditHeader = props => (
  <Space align="center" w100>
    <Avatar
      variant="shadow"
      shape="circle"
      src={props.item.avatar}
      style={{ width: 20, height: 20 }}
    />
    <Text style={titleStyle} strong>
      {props.item.title}
    </Text>
    <Text style={dateStyle}>
      Posted by {props.item.name} {formatDistance(props.item.date, currentDate)}{" "}
      ago
    </Text>
  </Space>
);

const RedditFooter = props => {
  const { comments, item, onBtnModal } = props;
  return (
    <Space align="center" justify="space-between" w100>
      <Space align="center" w100>
        <Button style={footerBtnStyle} variant="shadow">
          <Space align="center" w100>
            <i className="far fa-comment-alt"></i>
            <span>{comments}&nbsp;comments</span>
          </Space>
        </Button>
        <Button style={footerBtnStyle} variant="shadow">
          <Space align="center" w100>
            <i className="fas fa-share"></i>
            <span>Share</span>
          </Space>
        </Button>
        <Button style={footerBtnStyle} variant="shadow">
          <Space align="center" w100>
            <i className="fas fa-bookmark"></i>
            <span>Save</span>
          </Space>
        </Button>
      </Space>
      <Button
        style={footerBtnStyle}
        variant="shadow"
        onClick={() => onBtnModal(item)}
      >
        <Space align="center" w100>
          <i className="fas fa-info-circle"></i>
          <span>More Details</span>
        </Space>
      </Button>
    </Space>
  );
};

export const RedditCard = props => {
  const { item, onBtnModal } = props;

  const cardStyle = {
    width: "calc(100% - 40px)",
    height: 190,
    padding: "0 20px"
  };

  const contentStyle = {
    height: "100%",
    width: "100%"
  };

  return (
    <Space w100 style={{ maxWidth: 800, margin: 20 }}>
      <Card
        style={cardStyle}
        variant="shadow"
        padded={false}
        contentStyle={contentStyle}
      >
        <Space align="center" full size={30}>
          {/* vote */}
          <Space direction="vertical" justify="center">
            <ArrowIcon icon="up" />
            <Text style={{ fontSize: 12 }}>10k</Text>
            <ArrowIcon icon="down" />
          </Space>
          <Space direction="vertical" full py={10}>
            <RedditHeader item={item} />
            <Space full direction="vertical" align="start">
              <Paragraph className={styles.redditparagraph}>
                {item.pitch}
              </Paragraph>
              <Space>
                {item.tags.map(i => (
                  <Tag key={i} size="small">
                    {i}
                  </Tag>
                ))}
              </Space>
              <RedditFooter
                item={item}
                comments="10k"
                onBtnModal={onBtnModal}
              />
            </Space>
          </Space>
        </Space>
      </Card>
    </Space>
  );
};
