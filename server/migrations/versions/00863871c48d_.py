"""empty message

Revision ID: 00863871c48d
Revises: 
Create Date: 2024-12-18 13:38:25.217194

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '00863871c48d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cohorts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('text', sa.String(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('date_posted', sa.String(), nullable=True),
    sa.Column('deleted', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('news',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('text', sa.String(), nullable=False),
    sa.Column('posted_by', sa.String(), nullable=False),
    sa.Column('date_posted', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('stories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('posted_by', sa.String(), nullable=False),
    sa.Column('text', sa.String(), nullable=False),
    sa.Column('likes', sa.Integer(), nullable=True),
    sa.Column('User_id', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('phone', sa.String(), nullable=True),
    sa.Column('password', sa.String(), nullable=False),
    sa.Column('course', sa.String(), nullable=False),
    sa.Column('year_of_graduation', sa.String(), nullable=True),
    sa.Column('gender', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('messages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('text', sa.String(), nullable=False),
    sa.Column('date', sa.String(), nullable=True),
    sa.Column('time', sa.String(), nullable=True),
    sa.Column('deleted', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('stories_comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('story_id', sa.Integer(), nullable=False),
    sa.Column('comment_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['comment_id'], ['comments.id'], ),
    sa.ForeignKeyConstraint(['story_id'], ['stories.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users_cohorts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('cohort_id', sa.Integer(), nullable=False),
    sa.Column('removed', sa.Integer(), nullable=True),
    sa.Column('admin', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['cohort_id'], ['cohorts.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cohorts_messages',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('cohort_id', sa.Integer(), nullable=True),
    sa.Column('message_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['cohort_id'], ['cohorts.id'], ),
    sa.ForeignKeyConstraint(['message_id'], ['messages.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('cohorts_messages')
    op.drop_table('users_cohorts')
    op.drop_table('stories_comments')
    op.drop_table('messages')
    op.drop_table('users')
    op.drop_table('stories')
    op.drop_table('news')
    op.drop_table('comments')
    op.drop_table('cohorts')
    # ### end Alembic commands ###