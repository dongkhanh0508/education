import { orderBy } from 'lodash';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useCallback, useState } from 'react';
import { Box, Button, Container, Grid, Skeleton, Stack } from '@mui/material';
import useSettings from 'hooks/useSettings';
import Page from 'components/Page';
import HeaderBreadcrumbs from 'components/HeaderBreadcrumbs';
import { PaginationRequest, StagePagingRequest } from 'models';
import { Post } from '../models/Post.model';
import { _PostService } from '../posts.service';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

const applySort = (posts: Post[], sortBy: string) => {
  if (sortBy === 'latest') {
    return orderBy(posts, ['createdAt'], ['desc']);
  }
  if (sortBy === 'oldest') {
    return orderBy(posts, ['createdAt'], ['asc']);
  }
  if (sortBy === 'popular') {
    return orderBy(posts, ['view'], ['desc']);
  }
  return posts;
};

const SkeletonLoad = (
  <Grid container spacing={3} sx={{ mt: 2 }}>
    {[...Array(4)].map((_, index) => (
      <Grid item xs={12} md={3} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ height: 200, borderRadius: 2 }} />
        <Box sx={{ display: 'flex', mt: 1.5 }}>
          <Skeleton variant="circular" sx={{ width: 40, height: 40 }} />
          <Skeleton variant="text" sx={{ mx: 1, flexGrow: 1 }} />
        </Box>
      </Grid>
    ))}
  </Grid>
);

export default function BlogPosts() {
  const { themeStretch } = useSettings();
  const [filters, setFilters] = useState('latest');

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    _PostService.get({ page: 0 } as PaginationRequest).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.log(err.response),
      complete: () => {
        console.log('a');
      },
    });

    return () => {};
  }, []);

  const handleChangeSort = (value?: string) => {
    if (value) {
      setFilters(value);
    }
  };

  return (
    <Page title="Blog: Posts | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Blog"
          links={[{ name: 'Dashboard', href: '' }, { name: 'Blog', href: '' }, { name: 'Posts' }]}
          action={
            <Button
              variant="contained"
              component={RouterLink}
              to={'/a'}
              startIcon={<Icon icon={plusFill} />}
            >
              New Post
            </Button>
          }
        />

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between"></Stack>

        <InfiniteScroll
          next={() => {}}
          hasMore={false}
          loader={SkeletonLoad}
          dataLength={0}
          style={{ overflow: 'inherit' }}
        >
          <Grid container spacing={3}>
            {/* {sortedPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))} */}
          </Grid>
        </InfiniteScroll>
      </Container>
    </Page>
  );
}
