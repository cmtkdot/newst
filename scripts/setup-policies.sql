-- Enable RLS on all tables
ALTER TABLE channels ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE bot_activities ENABLE ROW LEVEL SECURITY;

-- Create policies for channels
CREATE POLICY "Channels are viewable by authenticated users"
ON channels FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Channels are insertable by authenticated users"
ON channels FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Channels are updatable by owners"
ON channels FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Channels are deletable by owners"
ON channels FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Create policies for media
CREATE POLICY "Media is viewable by authenticated users"
ON media FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Media is insertable by authenticated users"
ON media FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Media is updatable by owners"
ON media FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Media is deletable by owners"
ON media FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Create policies for messages
CREATE POLICY "Messages are viewable by authenticated users"
ON messages FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Messages are insertable by authenticated users"
ON messages FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Create policies for media_tags
CREATE POLICY "Media tags are viewable by authenticated users"
ON media_tags FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Media tags are insertable by media owners"
ON media_tags FOR INSERT
TO authenticated
WITH CHECK (EXISTS (
  SELECT 1 FROM media
  WHERE media.id = media_tags.media_id
  AND media.user_id = auth.uid()
));

CREATE POLICY "Media tags are deletable by media owners"
ON media_tags FOR DELETE
TO authenticated
USING (EXISTS (
  SELECT 1 FROM media
  WHERE media.id = media_tags.media_id
  AND media.user_id = auth.uid()
));

-- Create policies for tags
CREATE POLICY "Tags are viewable by authenticated users"
ON tags FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Tags are insertable by authenticated users"
ON tags FOR INSERT
TO authenticated
WITH CHECK (true);

-- Create policies for bot_activities
CREATE POLICY "Bot activities are viewable by authenticated users"
ON bot_activities FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Bot activities are insertable by authenticated users"
ON bot_activities FOR INSERT
TO authenticated
WITH CHECK (true);