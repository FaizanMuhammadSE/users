import { Box, Typography } from '@mui/material';
import { FC, isValidElement } from 'react';
import { IInfoWithMedia } from './types';
import styles from './InfoWithMedia.module.scss';

/**
 * InfoWithMedia Component
 *
 * - This component displays information along with a media element (image or custom media component).
 * - It supports a URL for the media or media component itself, dimensions, alt text, circular media styling, and additional box properties.
 *
 * @component
 * @param {object} props - The props for the InfoWithMedia component.
 * @param {string} props.url - The URL of the media to display.
 * @param {React.ComponentType} props.mediaComponent - A custom media component to use instead of the image URL.
 * @param {string | number} props.dimension - The dimension (width and height) of the media element.
 * @param {string} props.alt - The alt text for the media element.
 * @param {boolean} props.circularMedia - If true, displays the media as a circular element.
 * @param {string} props.value - The text value to display alongside the media.
 * @param {...object} props.boxProps - Additional props passed to the Box component.
 * @returns {JSX.Element} The rendered InfoWithMedia component.
 *
 * @example With Image URL
 * <InfoWithMedia
 *   url="https://example.com/image.jpg"
 *   dimension={100}
 *   alt="Example Image"
 *   circularMedia={true}
 *   value="Sample Text"
 *   p={2}
 * />
 *
 * @example With Custom Media Component
 * <InfoWithMedia
 *   mediaComponent={<SomeMediaComponent/>}
 *   value="Sample Text"
 * />
 */

export const InfoWithMedia: FC<IInfoWithMedia> = ({
  url,
  dimension,
  alt,
  circularMedia,
  mediaComponent,
  value,
  ...boxProps
}) => {
  return (
    <Box className={styles.container} {...boxProps}>
      {mediaComponent ? (
        mediaComponent
      ) : (
        <img
          src={url}
          alt={alt}
          style={{
            height: dimension ?? 'auto',
            width: dimension ?? 'auto',
            borderRadius: circularMedia ? '50%' : '0',
          }}
        />
      )}
      {isValidElement(value) ? value : <Typography>{value}</Typography>}
    </Box>
  );
};
