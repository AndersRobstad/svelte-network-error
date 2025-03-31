<script lang="ts">
  import type { PageData } from "./$types";

  const { data }: PageData = $props();

  const { post, user, timestamp } = $derived(data);
</script>

<h1>Welcome to Route 2</h1>
<p>Post: {JSON.stringify(post)}</p>
<p>User: {JSON.stringify(user)}</p>
<p>Timestamp: {JSON.stringify(timestamp)}</p>